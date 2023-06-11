import { DataSource } from "typeorm";
import { Branch } from "src/modules/branch/branch.entity";

export const branchProviders = [
    {
        provide: 'BRANCH_REPOSITORY',
        useFactory: (dataSource: DataSource)=> dataSource.getRepository(Branch),
        inject: ['DATA_SOURCE']
    }
]