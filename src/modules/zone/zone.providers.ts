import { DataSource } from 'typeorm';
import { Zone } from './zone.entity';

export const zoneProviders = [
  {
    provide: 'ZONE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Zone),
    inject: ['DATA_SOURCE'],
  },
];
