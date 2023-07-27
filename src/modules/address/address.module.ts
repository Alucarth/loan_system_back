import { Module } from '@nestjs/common';
import { AddressController } from 'src/controllers/address/address.controller';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from 'src/services/address/address.providers';
import { AddressService } from 'src/services/address/address.service';
import { cityProviders } from 'src/services/city/city.providers';
import { personProviders } from 'src/services/person/person.providers';
@Module({
    imports: [DatabaseModule],
    controllers: [AddressController],
    providers:[
        ...addressProviders,
        ...cityProviders,
        ...personProviders,
        AddressService
    ]
})
export class AddressModule {}
