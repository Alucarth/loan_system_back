import { Module } from '@nestjs/common';
import { ActivityFrecuency } from './activity_frecuency.entity';
import { Account } from '../account/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityFrecuencySeeder } from './activity_frecuency.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityFrecuency, Account])],
  providers: [ActivityFrecuencySeeder],
})
export class ActivityFrecuencyModule {}
