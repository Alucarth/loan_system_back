import { Ocupation } from './ocupation.entity';
import { DataSource } from 'typeorm';

export const ocupationProviders = [
  {
    provide: 'OCUPATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ocupation),
    inject: ['DATA_SOURCE'],
  },
];
