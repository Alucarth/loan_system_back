import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Person } from './person.entity';
import { City } from '../city/city.entity';
import { Country } from '../country/country.entity';
import { Account } from '../account/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonSeeder implements OnModuleInit {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private personRepository: Repository<Person>,
    @Inject('CITY_REPOSITORY')
    private cityRepository: Repository<City>,
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
    @Inject('COUNTRY_REPOSITORY')
    private countryRepository: Repository<Country>,
  ) {}

  async onModuleInit() {
    const exist = await this.personRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Person). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (Person).');
    console.log('Esperando a los datos de las tablas relacionadas a Person');
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    await this.personRepository.query(
      'DROP TRIGGER IF EXISTS person_public_id;',
    );
    await this.personRepository.query(
      'CREATE TRIGGER person_public_id before INSERT  on person for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from person WHERE account_id = NEW.account_id);  END',
    );
    console.log('datos cargados de las tablas relacionadas a Person');

    const personData = [
      {
        names: 'Dilan',
        father_last_name: 'Torrez',
        mother_last_name: 'Salinas',
        photo_url: 'https://example.com/photo1.jpg',
        identity_card: '123456',
        gender: 'Male',
        age: 25,
        civil_status: 'Single',
        personal_number: '789456',
        birth_date: new Date('1997-08-27'),
        account: accounts[0],
        public_id: 0,
      },
      {
        names: 'David',
        father_last_name: 'Torrez',
        mother_last_name: 'Salinas',
        photo_url: 'https://example.com/photo1.jpg',
        identity_card: '6047054',
        gender: 'Male',
        age: 25,
        civil_status: 'Single',
        personal_number: '789456',
        birth_date: new Date('1986-07-21'),
        account: accounts[0],
        public_id: 0,
      },
    ];
    // //TareaDilan: revisar funcionalidad
    for (const person of personData) {
      await this.personRepository.save(person);
    }
    console.log('Cargando registros de Person en la base de datos...');
  }
}
