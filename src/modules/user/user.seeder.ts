import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Person } from 'src/modules/person/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserSeeder implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}
  async onApplicationBootstrap() {
    const saltOrRounds = 10;
    const exist = await this.userRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (User). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (User). Cargando registros en la base de datos.',
    );

    // Esperando que PersonModule se inicialice antes jajaja bien bien
    await new Promise((resolve) => setTimeout(resolve, 500));
    await this.userRepository.query('DROP TRIGGER IF EXISTS user_public_id;');
    await this.userRepository.query(
      'CREATE TRIGGER user_public_id before INSERT  on user for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from user WHERE account_id = NEW.account_id);  END',
    );
    const persons = await this.personRepository.find();
    // console.log(persons);
    const userData = [
      {
        username: 'dilan',
        password: '123456',
        person_id: persons[0].id,
        account_id: 1,
        public_id: 0,
      },
      {
        username: 'admin',
        password: '123456',
        person_id: persons[1].id,
        account_id: 1,
        public_id: 0,
      },
      // Agregar más objetos con datos de prueba
    ];

    for (const user of userData) {
      this.userRepository.save(user);
    }
  }
}
