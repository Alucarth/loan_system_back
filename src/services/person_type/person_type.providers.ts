import { PersonType } from "src/modules/person_type/person_type.entity";
import { DataSource } from "typeorm";

export const personTypeProviders = [
    {
        provide: 'PERSON_TYPE_REPOSITORY',
        useFactory: (dataSource: DataSource)=>dataSource.getRepository(PersonType),
        inject: ['DATA_SOURCE']

    }
]