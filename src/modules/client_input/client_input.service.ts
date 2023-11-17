import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientInput } from './client_input.entity';
import { RequestUserDto } from '../user/user.dto';
import { CreateClientInputDto } from './client.dto';

@Injectable()
export class ClientInputService {
  constructor(
    @Inject('CLIENT_INPUT_REPOSITORY')
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
}
