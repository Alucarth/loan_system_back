import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UserRol } from './user_rol.entity';
import { Rol } from '../rol/rol.entity';
import { CreateUserRolDto } from './user_rol.dto';
import { UserRolService } from './user_rol.services';

@Injectable()
export class UserRolSeeder implements OnApplicationBootstrap {
  constructor(
    @Inject('USER_ROL_REPOSITORY')
    private userRolRepository: Repository<UserRol>,
    private readonly _userRolService: UserRolService,
    @Inject('ROL_REPOSITORY')
    private rolRepository: Repository<Rol>,
    @Inject('USER_REPOSITORY')
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

    // Esperando que PersonModule se inicialice antes
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const rols = await this.rolRepository.find();
    const users = await this.userRepository.find();

    const userRolData = [
      {
        rol_id: rols[0],
        user_id: users[0],
      },
      {
        rol_id: rols[1],
        user_id: users[0],
      },
      {
        rol_id: rols[2],
        user_id: users[1],
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
