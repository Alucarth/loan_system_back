import { Module } from '@nestjs/common';
import { ActivityClient } from './activity_client.entity';
import { Account } from '../account/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../client/client.entity';
import { ActivityFrecuency } from '../activity_frecuency/activity_frecuency.entity';
import { ActivityType } from '../activity_type/activity_type.entity';
import { ClientType } from '../client_type/client_type.entity';
import { ActivityClientController } from './activity_client.controller';
import { ActivityClientService } from './activity_clilent.service';

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
  controllers: [ActivityClientController],
  providers: [ActivityClientService],
})
export class ActivityClientModule {}
