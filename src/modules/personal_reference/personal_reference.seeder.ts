import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { PersonalReference } from './personal_reference.entity';

@Injectable()
export class PersonalReferenceSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(PersonalReference)
    private personalReferenceRepository: Repository<PersonalReference>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.personalReferenceRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (PersonalReference). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (PersonalReference).');
    console.log(
      'Esperando a los datos de las tablas relacionadas a PersonalReference',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    await this.personalReferenceRepository.query(
      'DROP TRIGGER IF EXISTS personal_reference_public_id;',
    );
    await this.personalReferenceRepository.query(
      'CREATE TRIGGER personal_reference_public_id before INSERT  on personal_reference for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from personal_reference WHERE account_id = NEW.account_id);  END',
    );

    // const PersonalReferences = [
    //   {
    //     name: 'Papa',
    //     account: accounts[0],
    //     public_id: 0,
    //   },
    //   {
    //     name: 'Mama',
    //     account: accounts[0],
    //     public_id: 0,
    //   },
    //   {
    //     name: 'Hermano',
    //     account: accounts[0],
    //     public_id: 0,
    //   },
    // ];

    // for (const PersonalReference of PersonalReferences) {
    //   await this.personalReferenceRepository.save(PersonalReference);
    // }
  }
}
