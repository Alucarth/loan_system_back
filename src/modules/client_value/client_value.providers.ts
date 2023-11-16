import { DataSource } from 'typeorm';
import { ClientValue } from './client_value.entity';

export const clientInputValueProviders = [
  {
    provide: 'CLIENT_VALUE_RESPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ClientValue),
    inject: ['DATA_SOURCE'],
  },
];
