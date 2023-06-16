import { Address } from "src/modules/address/address.entity";
import { DataSource } from "typeorm";

export const addressProviders = [
    {
        provide: 'ADDRESS_REPOSITORY',
        useFactory: (dataSource:DataSource)=> dataSource.getRepository(Address),
        inject: ['DATA_SOURCE']
    }
]