import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Person } from './person.entity';
import { Repository } from 'typeorm';
<<<<<<< HEAD
import { Account } from '../account/account.entity';
import { CreatePersonDto } from './create-person.dto';
=======
import { InjectRepository } from '@nestjs/typeorm';
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476

@Injectable()
export class PersonSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
<<<<<<< HEAD
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
=======
    @InjectRepository(City)
    private cityRepository: Repository<City>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476
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
<<<<<<< HEAD
    const accounts = await Promise.all([
=======
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476
      this.accountRepository.find(),
    ]);
    await this.personRepository.query(
      'DROP TRIGGER IF EXISTS person_public_id;',
    );
    await this.personRepository.query(
      'CREATE TRIGGER person_public_id before INSERT  on person for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from person WHERE account_id = NEW.account_id);  END',
    );
    console.log('datos cargados de las tablas relacionadas a Person');

<<<<<<< HEAD
    // Perform database population logic here
    const personsToCreate: CreatePersonDto[] = [
      // Define the data for the persons you want to create
      {
        names: 'John',
        father_last_name: 'Doe',
        mother_last_name: 'Smith',
        photo_url: 'https://example.com/photo.jpg',
        identity_card: '123456789',
        gender: 'Male',
        age: 30,
        material_status: 'Single',
        birth_date: new Date('1993-01-01'),
        account_id: 1, //accounts[0].id, // Suponiendo que se desea saber si existe y asignar el primer account
        public_id: 1,
        user_id: 2, 
      },
      // aqui se van añadiendo mas personas si es nesesario
    ];

    const createdPersons = await this.personRepository.save(personsToCreate);
    console.log('Created persons:', createdPersons);
=======
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
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476
  }
}
