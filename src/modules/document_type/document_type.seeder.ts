import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { DocumentTypeService } from './document_type.service';
import { DocumentType } from './document_type.entity';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DocumentTypeSeeder implements OnModuleInit {
  constructor(
    private readonly _documentTypeService: DocumentTypeService,
    @InjectRepository(DocumentType)
    private documentTypeRepository: Repository<DocumentType>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    //await this.branchRepository.query('TRUNCATE TABLE branch RESTART IDENTITY CASCADE');
    const exist = await this.documentTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Document Type). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Document Type). Cargando registros en la base de datos.',
    );

    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    const document_type_data = [
      {
        name: 'CI',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Passaporte',
        account: accounts[0],
        public_id: 0,
      },
      // Agregar más objetos con datos de prueba
    ];

    await this.documentTypeRepository.query(
      'DROP TRIGGER IF EXISTS document_type_public_id;',
    );
    await this.documentTypeRepository.query(
      'CREATE TRIGGER document_type_public_id before INSERT  on document_type for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from document_type WHERE account_id = NEW.account_id);  END',
    );
    for (const data of document_type_data) {
      await this.documentTypeRepository.save(data);
    }
  }
}
