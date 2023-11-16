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

import { OcupationModule } from './modules/ocupation/ocupation.module';
import { QuotaTypeService } from './modules/quota_type/quota_type.service';
import { QuotaTypeModule } from './modules/quota_type/quota_type.module';
import { GuarantyTypeModule } from './modules/guaranty_type/guaranty_type.module';
import { ClientTypeModule } from './modules/client_type/client_type.module';
import { CreditTypeModule } from './modules/credit_type/credit_type.module';
import { ClientModule } from './modules/client/client.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { EmployeeTypeModule } from './modules/employee_type/employee_type.module';
import { ProductModule } from './modules/product/product.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { DocumentTypeModule } from './modules/document_type/document_type.module';
import { ClientInputsModule } from './modules/client_input/client_input.module';
import { ClientValueModule } from './modules/client_value/client_value.module';
@Module({
  imports: [
    CityModule,
    CountryModule,
    AccountModule,
    BranchModule,
    EmployeeTypeModule,
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
    ClientModule,
    EmployeeModule,
    ProductModule,
    CurrencyModule,
    DocumentTypeModule,
    ClientInputsModule,
    ClientValueModule,
  ],
  controllers: [AppController],
  providers: [AppService, QuotaTypeService],
})
export class AppModule {}
