import { Module } from '@nestjs/common';
import { AddressController } from 'src/controllers/address/address.controller';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from 'src/services/address/address.providers';
import { AddressService } from 'src/services/address/address.service';
import { ocupationProviders } from 'src/services/ocupation/ocupation.providers';
import { OcupationService } from 'src/services/ocupation/ocupation.service';
@Module({
    imports: [DatabaseModule],
    controllers: [AddressController],
    providers:[
        ...addressProviders,
        AddressService,
        ...ocupationProviders,
        OcupationService
    ]
})
export class AddressModule {}
