import { City } from "src/modules/city/city.entity";
import { DataSource } from "typeorm";

export const cityProviders = [
    {
        provide: 'CITY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(City),
        inject: ['DATA_SOURCE']
    }
]