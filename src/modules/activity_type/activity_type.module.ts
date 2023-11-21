import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityType } from './activity_type.entity';
import { Account } from '../account/account.entity';
import { ActivityTypeSeeder } from './activity_type.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityType, Account])],
  providers: [ActivityTypeSeeder],
})
export class ActivityTypeModule {}
