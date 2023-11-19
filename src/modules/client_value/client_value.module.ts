import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { clientInputProviders } from '../client_input/client_input.provider';
import { ClientValueSeeder } from './client_value.seeder';
import { clientInputValueProviders } from './client_value.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...clientInputProviders,
    ...clientInputValueProviders,
    ClientValueSeeder,
  ],
})
export class ClientValueModule {}
