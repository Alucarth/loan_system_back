import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { RequestUserDto } from '../user/user.dto';
import { ClientDto } from './client.dto';
import { ClientType } from '../client_type/client_type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(ClientType)
    private clientTypeRepository: Repository<ClientType>,
  ) {}

  async findAll(user: RequestUserDto): Promise<Client[]> {
    return await this.clientRepository.find({
      relations: {
        person: {
          document_type: true,
        },
        client_type: true,
      },
      where: { account_id: user.account_id },
    });
  }

  async findById(id: number, user: RequestUserDto): Promise<Client> {
    return await this.clientRepository.findOne({
      relations: {
        person: {
          document_type: true,
        },
        client_type: true,
      },
      where: { public_id: id, account_id: user.account_id },
    });
  }

  async create(payload: ClientDto, user: RequestUserDto): Promise<Client> {
    let client_type = await this.clientTypeRepository.findOne({
      where: { name: 'Nuevo' },
    });

    if (!client_type) {
      client_type = await this.clientTypeRepository.save({
        account_id: user.account_id,
        user_id: user.user_id,
        name: 'Nuevo',
        public_id: 0,
      });
    }

    payload.client_type_id = client_type.id;
    payload.account_id = user.account_id;
    payload.user_id = user.user_id;
    payload.public_id = 0;

    return await this.clientRepository.save(payload);
  }

  async updateById(
    id: number,
    payload: ClientDto,
    user: RequestUserDto,
  ): Promise<Client> {
    const client = await this.clientRepository.findOneBy({
      public_id: id,
      account_id: user.account_id,
    });
    if (!client) {
      throw new NotFoundException('Client  not found');
    }
    payload.account_id = user.account_id;
    payload.user_id = user.user_id;
    const client_update = Object.assign(client, payload);
    return await this.clientRepository.save(client_update);
  }

  async delete(id: number, user: RequestUserDto) {
    const client = await this.clientRepository.findOneBy({
      public_id: id,
      account_id: user.account_id,
    });

    if (!client) {
      throw new NotFoundException('Client  not found');
    }

    return this.clientRepository.delete(client.id);
  }
}
