import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientType } from '../client_type/client_type.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, ClientType, Account, User])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
