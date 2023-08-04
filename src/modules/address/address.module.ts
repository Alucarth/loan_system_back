import { Module } from '@nestjs/common';
import { AddressController } from 'src/controllers/address/address.controller';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from 'src/services/address/address.providers';
import { AddressService } from 'src/services/address/address.service';
import { cityProviders } from 'src/services/city/city.providers';
import { ocupationProviders } from 'src/services/ocupation/ocupation.providers';
import { OcupationService } from 'src/services/ocupation/ocupation.service';
import { personProviders } from 'src/services/person/person.providers';
import { AddressSeeder } from './address.seeder';
@Module({
    imports: [DatabaseModule],
    controllers: [AddressController],
    providers:[
        ...addressProviders,
        ...cityProviders,
        ...personProviders,
        ...ocupationProviders,
        OcupationService,
        AddressService,
        AddressSeeder
    ]
})
export class AddressModule {}
