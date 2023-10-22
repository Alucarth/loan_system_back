import { ClientType } from './client_type.entity';
import { DataSource } from 'typeorm';

export const clientTypeProviders = [
  {
    provide: 'CLIENT_TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ClientType),
    inject: ['DATA_SOURCE'],
  },
];
