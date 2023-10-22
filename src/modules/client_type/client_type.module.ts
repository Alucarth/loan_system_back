import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClientTypeController } from './client_type.controller';
import { clientTypeProviders } from './client_type.providers';
import { ClientTypeService } from './client_type.service';

import { ClientTypeSeeder } from './client_type.seeder';
import { userProviders } from '../user/user.providers';
import { accountProviders } from '../account/account.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientTypeController],
  providers: [
    ...clientTypeProviders,
    ...userProviders,
    ...accountProviders,
    ...userProviders,
    ClientTypeService,
    ClientTypeSeeder,
  ],
})
export class ClientTypeModule {}
