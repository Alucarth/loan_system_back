import { DataSource } from 'typeorm';
import { DocumentType } from './document_type.entity';

export const documentTypeProviders = [
  {
    provide: 'DOCUMENT_TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DocumentType),
    inject: ['DATA_SOURCE'],
  },
];
