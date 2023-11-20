import { Module } from '@nestjs/common';
import { ActivityFrecuency } from './activity_frecuency.entity';
import { Account } from '../account/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityFrecuency, Account])],
})
export class ActivityFrecuencyModule {}
