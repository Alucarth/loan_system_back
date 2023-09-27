import { DataSource } from 'typeorm';
import { Branch } from './branch.entity';

export const branchProviders = [
  {
    provide: 'BRANCH_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Branch),
    inject: ['DATA_SOURCE'],
  },
];
