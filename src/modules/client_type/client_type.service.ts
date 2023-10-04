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

  create(city_dto: CreateClientTypeDto): Promise<ClientType> {
    return this.clientTypeRepository.save(city_dto);
  }

  async findClientTypeById(id: number) {
    return this.clientTypeRepository.find({ where: { id:id }, relations: ['user'] });
  }

  async updateById(id: number, updateData: UpdateClientTypeDto): Promise<ClientType> {
    const city = await this.clientTypeRepository.findOneBy({ id: id });
    if (!city) {
      throw new NotFoundException('Client Type not found');
    }
    const updatedCity = Object.assign(city, updateData);
    return this.clientTypeRepository.save(updatedCity);
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
