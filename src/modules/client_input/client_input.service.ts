import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientInput } from './client_input.entity';
import { RequestUserDto } from '../user/user.dto';
import { CreateClientInputDto } from './client.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientInputService {
  constructor(
    @InjectRepository(ClientInput)
    private clientInputRepository: Repository<ClientInput>,
  ) {}

  async findAll(request: RequestUserDto): Promise<ClientInput[]> {
    return this.clientInputRepository.find({
      where: { account_id: request.account_id },
    });
  }

  async create(
    clientInputDto: CreateClientInputDto,
    request: RequestUserDto,
  ): Promise<ClientInput> {
    (clientInputDto.account_id = request.account_id),
      (clientInputDto.user_id = request.user_id);
    return await this.clientInputRepository.save(clientInputDto);
  }

  async updateById(id: number, clientInputData: CreateClientInputDto, user: RequestUserDto): Promise<void> {
    const clientInput = await this.clientInputRepository.findOneBy({
      id,
      account_id: user.account_id,
    });

    if (!clientInput) {
      throw new NotFoundException('Client input not found');
    }
    for (const key in clientInputData) {
      clientInput[key] = clientInputData[key];
    }
    await this.clientInputRepository.save(clientInput);
  }

  async patchById(id: number, clientInputData: CreateClientInputDto, user: RequestUserDto): Promise<void> {
    const clientInput = await this.clientInputRepository.findOneBy({
      id,
      account_id: user.account_id,
    });

    if (!clientInput) {
      throw new NotFoundException('Client input not found');
    }
    for (const key in clientInputData) {
      if (clientInputData[key] !== undefined) {
        clientInput[key] = clientInputData[key];
      }
    }
    await this.clientInputRepository.save(clientInput);
  }

  async softDeleteById(id: number, user: RequestUserDto): Promise<void> {
    const clientInput = await this.clientInputRepository.findOneBy({
      id,
      account_id: user.account_id,
    });
    if (!clientInput) {
      throw new NotFoundException('Client input not found');
    }
    await this.clientInputRepository.update({ id }, { deleted_at: new Date() });
  }
}
