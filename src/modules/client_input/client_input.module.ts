import { Module } from '@nestjs/common';
import { ClientInputSeeder } from './client_input.seeder';
import { ClientInputController } from './client_input.controller';
import { ClientInputService } from './client_input.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientInput } from './client_input.entity';
import { Account } from '../account/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientInput, Account])],
  controllers: [ClientInputController],
  providers: [ClientInputSeeder, ClientInputService],
})
export class ClientInputsModule {}
