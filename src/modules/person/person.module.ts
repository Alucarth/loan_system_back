import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { personTypeProviders } from 'src/services/person_type/person_type.providers';
import { PersonSeeder } from './person.seeder';
import { accountProviders } from '../account/account.providers';
import { personProviders } from './person.providers';
import { addressProviders } from '../address/address.providers';
import { PersonService } from './person.service';
import { AddressService } from '../address/address.service';
import { cityProviders } from '../city/city.providers';
import { countryProviders } from '../country/country.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [
    ...personProviders,
    ...cityProviders,
    ...accountProviders,
    ...personTypeProviders,
    ...addressProviders,
    ...countryProviders,
    PersonService,
    AddressService,
    PersonSeeder,
  ],
})
export class PersonModule {}
