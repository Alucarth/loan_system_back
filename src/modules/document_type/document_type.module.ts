import { Module } from '@nestjs/common';
import { DocuemntTypeController } from './document_type.controller';
import { DocumentTypeService } from './document_type.service';
import { DocumentTypeSeeder } from './document_type.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentType } from './document_type.entity';
import { Account } from '../account/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentType, Account])],
  controllers: [DocuemntTypeController],
  providers: [DocumentTypeService, DocumentTypeSeeder],
})
export class DocumentTypeModule {}
