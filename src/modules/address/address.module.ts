import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '../city/city.entity';
import { Address } from './address.entity';
import { Person } from '../person/person.entity';
import { Ocupation } from '../ocupation/ocupation.entity';
@Module({
  imports: [TypeOrmModule.forFeature([City, Address, Person, Ocupation])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
