import { DataSource } from 'typeorm';
import { ClientInput } from './client_input.entity';

export const clientInputProviders = [
  {
    provide: 'CLIENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ClientInput),
    inject: ['DATA_SOURCE'],
  },
];
