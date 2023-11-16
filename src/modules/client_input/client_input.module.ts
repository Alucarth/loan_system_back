import { Module } from '@nestjs/common';
import { ClientInput } from './client_input.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { DataSource } from 'typeorm';
import { clientInputProviders } from './client_input.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...clientInputProviders],
})
export class ClientInputsModule {}
