import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from '../account/account.providers';
import { personProviders } from './person.providers';
import { addressProviders } from '../address/address.providers';
import { PersonService } from './person.service';
import { AddressService } from '../address/address.service';
import { cityProviders } from '../city/city.providers';
import { countryProviders } from '../country/country.providers';
import { PersonSeeder } from './person.seeder';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [
    ...personProviders,
    ...cityProviders,
    ...accountProviders,
    ...addressProviders,
    ...countryProviders,
    PersonService,
    AddressService,
    PersonSeeder,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class PersonModule {}
