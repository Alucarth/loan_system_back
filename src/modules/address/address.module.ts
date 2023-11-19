import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { OcupationService } from '../ocupation/ocupation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '../city/city.entity';
import { Address } from './address.entity';
import { Person } from '../person/person.entity';
@Module({
  imports: [TypeOrmModule.forFeature([City, Address, Person])],
  controllers: [AddressController],
  providers: [OcupationService, AddressService],
})
export class AddressModule {}
