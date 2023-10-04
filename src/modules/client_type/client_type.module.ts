import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClientTypeController } from './client_type.controller';
import { clientTypeProviders } from './client_type.providers';
import { ClientTypeService } from './client_type.service';
import { userProviders } from 'src/services/user/user.providers';
import { ClientTypeSeeder } from './client_type.seeder';

@Module({
    imports: [DatabaseModule],
    controllers: [ClientTypeController],
    providers: [
      ...clientTypeProviders,
      ...userProviders,
      ClientTypeService,
      ClientTypeSeeder
    ],
  })
export class ClientTypeModule {}

