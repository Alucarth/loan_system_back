import { Module } from '@nestjs/common';
import { ClientTypeController } from './client_type.controller';
import { ClientTypeService } from './client_type.service';
import { ClientTypeSeeder } from './client_type.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientType } from './client_type.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { Client } from '../client/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, ClientType, Account, User])],
  controllers: [ClientTypeController],
  providers: [ClientTypeService, ClientTypeSeeder],
})
export class ClientTypeModule {}
