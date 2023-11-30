import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { Relationship } from './relationship.entity';

@Injectable()
export class RelationshipSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Relationship)
    private relationshipRepository: Repository<Relationship>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.relationshipRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Relationship). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (Relationship).');
    console.log(
      'Esperando a los datos de las tablas relacionadas a Relationship',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    await this.relationshipRepository.query(
      'DROP TRIGGER IF EXISTS relationship_public_id;',
    );
    await this.relationshipRepository.query(
      'CREATE TRIGGER relationship_public_id before INSERT  on relationship for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from relationship WHERE account_id = NEW.account_id);  END',
    );

    const relationships = [
      {
        name: 'Papa',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Mama',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Hermano',
        account: accounts[0],
        public_id: 0,
      },
    ];

    for (const relationship of relationships) {
      await this.relationshipRepository.save(relationship);
    }
  }
}
