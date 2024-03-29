import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UserRol } from './user_rol.entity';
import { Rol } from '../rol/rol.entity';
import { CreateUserRolDto } from './user_rol.dto';
import { UserRolService } from './user_rol.services';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRolDto } from '../rol/rol.dto';

@Injectable()
export class UserRolSeeder implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(UserRol)
    private userRolRepository: Repository<UserRol>,
    private readonly _userRolService: UserRolService,
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async onApplicationBootstrap() {
    const exist = await this.userRolRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (UserRol). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (UserRol). Cargando registros en la base de datos.',
    );
    await new Promise((resolve) => setTimeout(resolve, 800));
    const rolData = [
      {
        name: 'Adminstrador',
      },
      {
        name: 'Desarrollador',
      },
      {
        name: 'Cliente',
      },
      // Agregar más objetos con datos de prueba
    ];

    for (const data of rolData) {
      const rol = new CreateRolDto();

      rol.name = data.name;

      await this.rolRepository.save(rol);
    }

    // Esperando que PersonModule se inicialice antes
    // await new Promise((resolve) => setTimeout(resolve, 500));
    const rols = await this.rolRepository.find();
    // console.log(rols);
    const users = await this.userRepository.find();
    // console.log(users);
    const userRolData = [
      {
        rol_id: rols[0],
        user_id: users[0],
      },
      // Agregar más objetos con datos de prueba
    ];

    for (const data of userRolData) {
      const userRol = new CreateUserRolDto();
      //console.log(data);
      userRol.rol_id = data.rol_id.id;
      userRol.user_id = data.user_id.id;

      await this._userRolService.create(userRol);
    }
  }
}
