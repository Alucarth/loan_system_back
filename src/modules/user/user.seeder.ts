import {
  Inject,
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Person } from 'src/modules/person/person.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserSeeder implements OnApplicationBootstrap {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private readonly _userService: UserService,
    @Inject('PERSON_REPOSITORY')
    private personRepository: Repository<Person>,
  ) {}
  async onApplicationBootstrap() {
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await this.userRepository.query('DROP TRIGGER IF EXISTS user_public_id;');
    await this.userRepository.query(
      'CREATE TRIGGER user_public_id before INSERT  on user for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from user WHERE account_id = NEW.account_id);  END',
    );
    const persons = await this.personRepository.find();

    const userData = [
      {
        username: 'dilan',
        password: '123456',
        person: persons[0],
        account_id: 1,
        public_id: 0,
      },
      {
        username: 'admin',
        password: '123456',
        person: persons[1],
        account_id: 1,
        public_id: 0,
      },
      // Agregar más objetos con datos de prueba
    ];

    for (const data of userData) {
      const user = new User();
      //console.log(data);
      user.username = data.username;
      user.password = data.password;
      user.person_id = data.person.id;
      user.account_id = data.account_id;
      user.public_id = data.public_id;

      await this._userService.create(user);
    }
  }
}
