import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Person } from './person.entity';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { CreatePersonDto } from './create-person.dto';

@Injectable()
export class PersonSeeder implements OnModuleInit {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private personRepository: Repository<Person>,
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
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
    const accounts = await Promise.all([
      this.accountRepository.find(),
    ]);
    console.log('datos cargados de las tablas relacionadas a Person');

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
  }
}
