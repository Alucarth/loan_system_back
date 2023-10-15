import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from './address.providers';
import { AddressService } from './address.service';

import { AddressSeeder } from './address.seeder';
import { personProviders } from '../person/person.providers';
import { ocupationProviders } from '../ocupation/ocupation.providers';
import { OcupationService } from '../ocupation/ocupation.service';
import { cityProviders } from '../city/city.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [
    ...addressProviders,
    ...cityProviders,
    ...personProviders,
    ...ocupationProviders,
    OcupationService,
    AddressService,
  ],
})
export class AddressModule {}
