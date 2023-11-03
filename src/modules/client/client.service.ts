import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { RequestUserDto } from '../user/user.dto';
import { ClientDto } from './client.dto';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: Repository<Client>,
  ) {}

  async findAll(user: RequestUserDto): Promise<Client[]> {
    return await this.clientRepository.find({
      where: { account_id: user.account_id },
    });
  }

  async findById(id: number, user: RequestUserDto): Promise<Client> {
    return await this.clientRepository.findOne({
      relations: {
        person: true,
      },
      where: { public_id: id, account_id: user.account_id },
    });
  }

  async create(payload: ClientDto, user: RequestUserDto): Promise<Client> {
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
