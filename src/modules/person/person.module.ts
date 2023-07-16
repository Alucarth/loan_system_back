import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/person/person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from 'src/services/account/account.providers';
import { addressProviders } from 'src/services/address/address.providers';
import { AddressService } from 'src/services/address/address.service';
import { cityProviders } from 'src/services/city/city.providers';
import { CityService } from 'src/services/city/city.service';
import { countryProviders } from 'src/services/country/country.providers';
import { personProviders } from 'src/services/person/person.providers';
import { PersonService } from 'src/services/person/person.service';
import { personTypeProviders } from 'src/services/person_type/person_type.providers';


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
        AddressService
    ]
})
export class PersonModule {}
