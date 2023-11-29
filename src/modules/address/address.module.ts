import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '../city/city.entity';
import { Address } from './address.entity';
import { Person } from '../person/person.entity';
import { AddressSeeder } from './address.seeder';
@Module({
  imports: [TypeOrmModule.forFeature([City, Address, Person])],
  controllers: [AddressController],
  providers: [AddressService, AddressSeeder],
})
export class AddressModule {}
