import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientType } from './client_type.entity';
import { Repository } from 'typeorm';
import { CreateClientTypeDto, UpdateClientTypeDto } from './client_type.dto';

@Injectable()
export class ClientTypeService {
  constructor(
    @Inject('CLIENT_TYPE_REPOSITORY')
    private clientTypeRepository: Repository<ClientType>,
  ) {}

  async findAll(): Promise<ClientType[]> {
    return this.clientTypeRepository.find({ relations: ['user'] });
  }

  create(clientType_dto: CreateClientTypeDto): Promise<ClientType> {
    return this.clientTypeRepository.save(clientType_dto);
  }

  async findClientTypeById(id: number) {
    // le puse find y no findOne por que resive mas de un dato
    return this.clientTypeRepository.find({
      where: { id: id },
      relations: ['user'],
    });
  }

  async updateById(
    id: number,
    updateData: UpdateClientTypeDto,
  ): Promise<ClientType> {
    const creditType = await this.clientTypeRepository.findOneBy({ id: id });
    if (!creditType) {
      throw new NotFoundException('Client Type not found');
    }
    const updatedCreditType = Object.assign(creditType, updateData);
    return this.clientTypeRepository.save(updatedCreditType);
  }

  async updateClientTypeById(
    id: number,
    updateData: Partial<UpdateClientTypeDto>,
  ): Promise<ClientType> {
    const clientType = await this.clientTypeRepository.findOneBy({ id: id });
    if (!clientType) {
      throw new NotFoundException('Client Type not found');
    }
    const updatedClientType = Object.assign(clientType, updateData);
    return this.clientTypeRepository.save(updatedClientType);
  }

  async deleteById(id: number): Promise<void> {
    const clientType = await this.clientTypeRepository.findOneBy({ id: id });
    if (!clientType) {
      throw new NotFoundException('Client Type not found!');
    }
    await this.clientTypeRepository.delete(id);
  }
}
