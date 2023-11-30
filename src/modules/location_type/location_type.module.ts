import { Module } from '@nestjs/common';
import { LocationType } from './location_type.entity';
import { Account } from '../account/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationTypeSeeder } from './location_type.seeder';
import { LocationTypeController } from './location_type.controller';
import { LocationTypeService } from './location_type.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationType, Account])],
  controllers: [LocationTypeController],
  providers: [LocationTypeService, LocationTypeSeeder],
})
export class LocationTypeModule {}
