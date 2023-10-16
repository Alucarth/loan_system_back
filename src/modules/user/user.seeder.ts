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

    // Esperando que PersonModule se inicialice antes
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // const persons = await this.personRepository.find();

    // const userData = [
    //   {
    //     username: 'dilan',
    //     password: '123456',
    //     person_id: persons[0],
    //   },
    //   {
    //     username: 'david',
    //     password: '123456',
    //     person_id: persons[1],
    //   },
    //   {
    //     username: 'keyrus',
    //     password: '123456',
    //     person_id: persons[2],
    //   },
    //   // Agregar más objetos con datos de prueba
    // ];

    // for (const data of userData) {
    //   const user = new CreateUserDto();
    //   //console.log(data);
    //   user.username = data.username;
    //   user.password = data.password;
    //   user.person_id = data.person_id.id;

    //   await this._userService.create(user);
    // }
  }
}
