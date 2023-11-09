import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DocuemntTypeController } from './document_type.controller';
import { documentTypeProviders } from './document_type.providers';
import { DocumentTypeService } from './document_type.service';
import { DocumentTypeSeeder } from './document_type.seeder';
import { accountProviders } from '../account/account.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DocuemntTypeController],
  providers: [
    ...documentTypeProviders,
    ...accountProviders,
    DocumentTypeService,
    DocumentTypeSeeder,
  ],
})
export class DocumentTypeModule {}
