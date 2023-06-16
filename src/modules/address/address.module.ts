import { Module } from '@nestjs/common';
import { AddressController } from 'src/controllers/address/address.controller';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from 'src/services/address/address.providers';
import { AddressService } from 'src/services/address/address.service';
@Module({
    imports: [DatabaseModule],
    controllers: [AddressController],
    providers:[
        ...addressProviders,
        AddressService
    ]
})
export class AddressModule {}
