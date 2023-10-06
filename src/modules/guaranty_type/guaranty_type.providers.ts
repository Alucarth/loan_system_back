import { DataSource } from 'typeorm';
import { GuarantyType } from './guaranty_type.entity';

export const guarantyTypeProviders = [
  {
    provide: 'GUARANTY_TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GuarantyType),
    inject: ['DATA_SOURCE'],
  },
];
