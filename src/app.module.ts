import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AccountModule } from './modules/account/account.module';
import { BranchModule } from './modules/branch/branch.module';
import { PersonModule } from './modules/person/person.module';
import { CountryModule } from './modules/country/country.module';
import { CityModule } from './modules/city/city.module';
import { AuthModule } from './auth/auth.module';
import { AddressModule } from './modules/address/address.module';
import { RolModule } from './modules/rol/rol.module';
import { PersonTypeModule } from './modules/person_type/person_type.module';
import { OcupationModule } from './modules/ocupation/ocupation.module';


@Module({
  imports: [CityModule, CountryModule, AccountModule, BranchModule, OcupationModule, PersonTypeModule, AddressModule, PersonModule, AuthModule, RolModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
