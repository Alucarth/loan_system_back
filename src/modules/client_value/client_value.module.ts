import { Module } from '@nestjs/common';
import { ClientValueSeeder } from './client_value.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientInput } from '../client_input/client_input.entity';
import { Account } from '../account/account.entity';
import { ClientValue } from './client_value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientValue, ClientInput, Account])],
  providers: [ClientValueSeeder],
})
export class ClientValueModule {}
