import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClientController } from './client.controller';
import { clientProviders } from './client.provider';
import { accountProviders } from '../account/account.providers';
import { userProviders } from '../user/user.providers';
import { ClientService } from './client.service';
import { ClientTypeSeeder } from '../client_type/client_type.seeder';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientController],
  providers: [
    ...clientProviders,
    ...accountProviders,
    ...userProviders,
    ClientService,
  ],
})
export class ClientModule {}
