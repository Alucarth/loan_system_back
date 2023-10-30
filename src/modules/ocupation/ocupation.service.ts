import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Address } from 'src/modules/address/address.entity';
import { Ocupation } from 'src/modules/ocupation/ocupation.entity';
import { Repository } from 'typeorm';
import { CreateOcupationDto, UpdateOcupationDto } from './ocupation.dto';
import { RequestUserDto } from '../user/user.dto';

@Injectable()
export class OcupationService {
  constructor(
    @Inject('OCUPATION_REPOSITORY')
    private ocupationRepository: Repository<Ocupation>,
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}

  async findAll(): Promise<Ocupation[]> {
    return this.ocupationRepository.find({ relations: ['address'] });
  }

  /*create(ocupation_dto: CreateOcupationDto): Promise<CreateOcupationDto> 
    {
        return this.ocupationRepository.save(ocupation_dto);
    }*/

  async create(
    ocupation_dto: CreateOcupationDto,
    user: RequestUserDto,
  ): Promise<Ocupation> {
    // Entidades relacionadas (Address) -> address_id
    const address: Address = await this.addressRepository.findOneBy({
      id: ocupation_dto.address_id,
    });

    // Crear una nueva entidad Ocupation y rellenar sus propiedades
    const ocupation = new Ocupation();

    ocupation.address = address;
    ocupation.company_name = ocupation_dto.company_name;
    ocupation.description = ocupation_dto.description;
    ocupation.main_ocupation = ocupation_dto.main_ocupation;
    ocupation.net_income = ocupation_dto.net_income;
    ocupation.ocupation = ocupation_dto.ocupation;
    ocupation.ocupation_type = ocupation_dto.ocupation_type;
    ocupation.periodicity_income = ocupation_dto.periodicity_income;
    ocupation.status = ocupation_dto.status;
    ocupation.work_them = ocupation_dto.work_them;
    ocupation.workdays = ocupation_dto.workdays;
    ocupation.working_hours = ocupation_dto.working_hours;
    ocupation.account_id = user.account_id;
    ocupation.public_id = 0;
    ocupation.user_id = user.user_id;

    // Save the new Ocupation entity to the database
    return await this.ocupationRepository.save(ocupation);
  }

  findOcupationById(id: number, user: RequestUserDto) {
    return this.ocupationRepository.find({
      where: { public_id: id, account_id: user.account_id },
      // relations: ['address'], //no se debe colocar por colocar siempre ver en funcion de lo que sea necesirio y siempre quien requiere de esta informacion
    });
  }
  //revisar
  // async updateById(
  //   id: number,
  //   updateData: UpdateOcupationDto,
  // ): Promise<Ocupation> {
  //   const ocupation = await this.ocupationRepository.findOneBy({ id: id });
  //   if (!ocupation) {
  //     throw new NotFoundException('Ocupation Type not found');
  //   }
  //   const updatedOcupation = Object.assign(ocupation, updateData);
  //   return this.ocupationRepository.save(updatedOcupation);
  // }

  // async updateOcupationById(
  //   id: number,
  //   updateData: Partial<UpdateOcupationDto>,
  // ): Promise<Ocupation> {
  //   const ocupation = await this.ocupationRepository.findOneBy({ id: id });
  //   if (!ocupation) {
  //     throw new NotFoundException('Ocupation Type not found');
  //   }
  //   const updatedOcupation = Object.assign(ocupation, updateData);
  //   return this.ocupationRepository.save(updatedOcupation);
  // }

  // async deleteById(id: number): Promise<void> {
  //   const ocupation = await this.ocupationRepository.findOneBy({ id: id });
  //   if (!ocupation) {
  //     throw new NotFoundException('Ocupation Type not found!');
  //   }
  //   await this.ocupationRepository.delete(id);
  // }
}
