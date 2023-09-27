import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from './address.providers';
import { AddressService } from './address.service';
import { cityProviders } from 'src/services/city/city.providers';

import { AddressSeeder } from './address.seeder';
import { personProviders } from '../person/person.providers';
import { ocupationProviders } from '../ocupation/ocupation.providers';
import { OcupationService } from '../ocupation/ocupation.service';
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
    AddressSeeder,
  ],
})
export class AddressModule {}
