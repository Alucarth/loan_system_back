import { DataSource } from 'typeorm';
import { CreditType } from './credit_type.entity';

export const creditTypeProviders = [
  {
    provide: 'CREDIT_TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CreditType),
    inject: ['DATA_SOURCE'],
  },
];
