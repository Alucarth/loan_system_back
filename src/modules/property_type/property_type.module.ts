import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { propertyTypeProviders } from './property_type.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyType } from './property_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyType])],
  //   providers: [...propertyTypeProviders],
})
export class PropertyTypeModule {}
