import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
<<<<<<< HEAD
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from '../account/account.providers';
import { personProviders } from './person.providers';
=======
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476
import { PersonService } from './person.service';
import { PersonSeeder } from './person.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../account/account.entity';
import { Address } from '../address/address.entity';
import { Country } from '../country/country.entity';
import { Person } from './person.entity';
import { City } from '../city/city.entity';
import { AddressService } from '../address/address.service';
<<<<<<< HEAD
import { PersonSeeder } from './person.seeder';
=======
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476

@Module({
  imports: [
    TypeOrmModule.forFeature([Person, City, Account, Address, Country]),
  ],
  controllers: [PersonController],
  providers: [
<<<<<<< HEAD
    ...personProviders,
    ...accountProviders,
    PersonService,
    PersonSeeder
=======
    PersonService,
    AddressService,
    PersonSeeder,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476
  ],
})
export class PersonModule {}
