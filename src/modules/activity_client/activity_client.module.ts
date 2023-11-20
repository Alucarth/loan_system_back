import { Module } from '@nestjs/common';
import { ActivityClient } from './activity_client.entity';
import { Account } from '../account/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../client/client.entity';
import { ActivityFrecuency } from '../activity_frecuency/activity_frecuency.entity';
import { ActivityType } from '../activity_type/activity_type.entity';
import { ClientTypeController } from '../client_type/client_type.controller';
import { ClientTypeService } from '../client_type/client_type.service';
import { ClientType } from '../client_type/client_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ActivityClient,
      Account,
      Client,
      ActivityFrecuency,
      ActivityType,
      ClientType,
    ]),
  ],
  controllers: [ClientTypeController],
  providers: [ClientTypeService],
})
export class ActivityClientModule {}
