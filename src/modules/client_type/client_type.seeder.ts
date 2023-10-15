import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientTypeService } from './client_type.service';
import { Repository } from 'typeorm';
import { ClientType } from './client_type.entity';

@Injectable()
export class ClientTypeSeeder implements OnModuleInit {
  constructor(
    private readonly clientTypeService: ClientTypeService,
    @Inject('CLIENT_TYPE_REPOSITORY')
    private clientTypeRepository: Repository<ClientType>,
  ) {}

  async onModuleInit() {}
}
