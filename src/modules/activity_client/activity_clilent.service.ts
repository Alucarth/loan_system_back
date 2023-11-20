import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityClient } from './activity_client.entity';
import { CreateActivityClientDTO } from './activity_client.dto';
import { ActivityFrecuency } from '../activity_frecuency/activity_frecuency.entity';
import { ActivityType } from '../activity_type/activity_type.entity';
import { Client } from '../client/client.entity';
@Injectable()
export class ActivityClientService {
  constructor(
    @InjectRepository(ActivityClient)
    private activityClientRepository: Repository<ActivityClient>,
    @InjectRepository(ActivityFrecuency)
    private activityFrecuencyRepository: Repository<ActivityFrecuency>,
    @InjectRepository(ActivityType)
    private activityTypeRepository: Repository<ActivityType>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async findAll(
    client_id: number,
    request: RequestUserDto,
  ): Promise<ActivityClient[]> {
    return await this.activityClientRepository.find({
      where: {
        account_id: request.account_id,
        client_id: client_id,
      },
    });
  }

  async create(
    activityClientDto: CreateActivityClientDTO,
    user: RequestUserDto,
  ): Promise<ActivityClient> {
    // Buscar entidades relacionadas
    const client = await this.clientRepository.findOneBy({
      id: activityClientDto.client_id,
    });

    if (!client) {
      throw new NotFoundException('client not found!');
    }

    const activity_type = await this.activityTypeRepository.findOneBy({
      id: activityClientDto.activity_type_id,
    });

    if (!activity_type) {
      throw new NotFoundException('activity_type not found!');
    }

    const activity_frecuency = await this.activityFrecuencyRepository.findOneBy(
      {
        id: activityClientDto.activity_frecuency_id,
      },
    );

    if (!activity_frecuency) {
      throw new NotFoundException('activity_frecuency not found!');
    }

    // Crear una nueva entidad Address y rellenar sus propiedades
    const activity_client = new ActivityClient();

    activity_client.client_id = client.id;
    activity_client.activity_type_id = activity_type.id;
    activity_client.activity_frecuency_id = activity_frecuency.id;

    activity_client.activity = activityClientDto.activity;
    activity_client.activity_main = activityClientDto.activity_main;

    activity_client.company = activityClientDto.company;
    activity_client.incomes = activityClientDto.incomes;
    activity_client.years_work = activityClientDto.years_work;
    activity_client.days_work = activityClientDto.days_work;
    activity_client.time_work = activityClientDto.time_work;
    activity_client.comments = activityClientDto.comments;

    activity_client.public_id = 0;
    activity_client.account_id = user.account_id;
    activity_client.user_id = user.user_id;

    // Save the new Address entity to the database
    return await this.activityClientRepository.save(activity_client);
  }

  //   async findAddressById(id: number, user: RequestUserDto): Promise<Address> {
  //     return this.addressRepository.findOne({
  //       where: { public_id: id, account_id: user.account_id },
  //       // relations: ['city', 'person'], //no devolver persona por que se supone que quien hace la llamada de este metodo es una persona con direccion
  //     });
  //   }

  // async updateById(id: number, updateData: UpdateAddressDTO): Promise<Address> {
  //   const address = await this.addressRepository.findOneBy({ id: id });
  //   if (!address) {
  //     throw new NotFoundException('Address not found!');
  //   }
  //   const updatedAddress = Object.assign(address, updateData);
  //   return this.addressRepository.save(updatedAddress);
  // }

  // async updateAddressById(
  //   id: number,
  //   updateData: Partial<UpdateAddressDTO>,
  // ): Promise<Address> {
  //   const address = await this.addressRepository.findOneBy({ id: id });
  //   if (!address) {
  //     throw new NotFoundException('Address not found!');
  //   }
  //   const updatedAddress = Object.assign(address, updateData);
  //   return this.addressRepository.save(updatedAddress);
  // }

  // async deleteById(id: number): Promise<void> {
  //   const address = await this.addressRepository.findOneBy({ id: id });
  //   if (!address) {
  //     throw new NotFoundException('Address not found!');
  //   }
  //   await this.addressRepository.delete(id);
  // }
}
