import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from './address.providers';
import { AddressService } from './address.service';
import { cityProviders } from 'src/services/city/city.providers';
import { ocupationProviders } from 'src/services/ocupation/ocupation.providers';
import { OcupationService } from 'src/services/ocupation/ocupation.service';

import { AddressSeeder } from './address.seeder';
import { personProviders } from '../person/person.providers';
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
