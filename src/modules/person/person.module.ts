import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { AddressService } from '../address/address.service';
import { PersonSeeder } from './person.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../account/account.entity';
import { Address } from '../address/address.entity';
import { Country } from '../country/country.entity';
import { Person } from './person.entity';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Account, Address, Country])],
  controllers: [PersonController],
  providers: [
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
