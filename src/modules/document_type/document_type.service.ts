import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DocumentType } from './document_type.entity';
import { RequestUserDto } from '../user/user.dto';

@Injectable()
export class DocumentTypeService {
  constructor(
    @Inject('DOCUMENT_TYPE_REPOSITORY')
    private documentTypeRespository: Repository<DocumentType>,
  ) {}

  async findAll(request: RequestUserDto): Promise<DocumentType[]> {
    return this.documentTypeRespository.find({
      where: { account_id: request.account_id },
    });
  }
}
