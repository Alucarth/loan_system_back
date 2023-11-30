import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyType } from './property_type.entity';
import { PropertyTypeSeeder } from './property_type.seeder';
import { Account } from '../account/account.entity';
import { PropertyTypeService } from './property_type.service';
import { PropertyTypeController } from './property_type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyType, Account])],
  controllers: [PropertyTypeController],
  providers: [PropertyTypeService, PropertyTypeSeeder],
})
export class PropertyTypeModule {}
