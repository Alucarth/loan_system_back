import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
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
<<<<<<< HEAD
import { UserRolModule } from './modules/user_rol/user_rol.module';


@Module({
  imports: [CityModule, CountryModule, AccountModule, BranchModule, PersonTypeModule, PersonModule, RolModule, UserModule, UserRolModule, AddressModule, OcupationModule, AuthModule],
  controllers: [AppController,],
  providers: [AppService,],
=======
import { QuotaTypeService } from './modules/quota_type/quota_type.service';
import { QuotaTypeModule } from './modules/quota_type/quota_type.module';
import { GuarantyTypeModule } from './modules/guaranty_type/guaranty_type.module';
import { ClientTypeModule } from './modules/client_type/client_type.module';
import { CreditTypeModule } from './modules/credit_type/credit_type.module';

@Module({
  imports: [
    CityModule,
    CountryModule,
    AccountModule,
    BranchModule,
    PersonTypeModule,
    PersonModule,
    RolModule,
    UserModule,
    AddressModule,
    OcupationModule,
    AuthModule,
    QuotaTypeModule,
    GuarantyTypeModule,
    ClientTypeModule,
    CreditTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService, QuotaTypeService],
>>>>>>> 590ead470683b44369ed726a211b4c484638bd80
})
export class AppModule {}
