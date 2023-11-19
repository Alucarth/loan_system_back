import { DataSource } from 'typeorm';
import { PropertyType } from './property_type.entity';

export const propertyTypeProviders = [
  {
    provide: 'PROPERTY_TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PropertyType),
    inject: ['DATA_SOURCE'],
  },
];
