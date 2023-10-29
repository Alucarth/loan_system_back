import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientType } from './client_type.entity';
import { Repository } from 'typeorm';
import { CreateClientTypeDto, UpdateClientTypeDto } from './client_type.dto';
import { RequestUserDto } from '../user/user.dto';

@Injectable()
export class ClientTypeService {
  constructor(
    @Inject('CLIENT_TYPE_REPOSITORY')
    private clientTypeRepository: Repository<ClientType>,
  ) {}

  async findAll(user: RequestUserDto): Promise<ClientType[]> {
    return this.clientTypeRepository.find({
      where: { account_id: user.account_id },
    });
  }

  async findClientTypeById(id: number, user: RequestUserDto) {
    // le puse find y no findOne por que resive mas de un dato
    return this.clientTypeRepository.find({
      where: { public_id: id, account_id: user.account_id },
      // relations: ['user'],
    });
  }

  create(
    clientType_dto: CreateClientTypeDto,
    user: RequestUserDto,
  ): Promise<ClientType> {
    // console.log(user.account_id);
    clientType_dto.account_id = user.account_id;
    clientType_dto.user_id = user.user_id;
    return this.clientTypeRepository.save(clientType_dto);
  }

  async updateById(
    id: number,
    clientType_dto: UpdateClientTypeDto,
    user: RequestUserDto,
  ): Promise<ClientType> {
    const creditType = await this.clientTypeRepository.findOneBy({ id: id });
    if (!creditType) {
      throw new NotFoundException('Client Type not found');
    }
    clientType_dto.account_id = user.account_id;
    clientType_dto.user_id = user.user_id;
    const updatedCreditType = Object.assign(creditType, clientType_dto);
    return this.clientTypeRepository.save(updatedCreditType);
  }

  // async updateClientTypeById(
  //   id: number,
  //   updateData: Partial<UpdateClientTypeDto>,
  // ): Promise<ClientType> {
  //   const clientType = await this.clientTypeRepository.findOneBy({ id: id });
  //   if (!clientType) {
  //     throw new NotFoundException('Client Type not found');
  //   }
  //   const updatedClientType = Object.assign(clientType, updateData);
  //   return this.clientTypeRepository.save(updatedClientType);
  // }

  async deleteById(id: number, user: RequestUserDto): Promise<void> {
    const clientType = await this.clientTypeRepository.findOneBy({
      public_id: id,
      account_id: user.account_id,
    });
    if (!clientType) {
      throw new NotFoundException('Client Type not found!');
    }
    await this.clientTypeRepository.delete(id);
  }
}
