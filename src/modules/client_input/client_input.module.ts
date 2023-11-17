import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { clientInputProviders } from './client_input.provider';
import { accountProviders } from '../account/account.providers';
import { ClientInputSeeder } from './client_input.seeder';
import { ClientInputController } from './client_input.controller';
import { ClientInputService } from './client_input.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientInputController],
  providers: [
    ...clientInputProviders,
    ...accountProviders,
    ClientInputSeeder,
    ClientInputService,
  ],
})
export class ClientInputsModule {}
