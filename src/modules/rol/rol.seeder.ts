import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';
import { RolService } from './rol.service';
import { CreateRolDto } from './rol.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  async onModuleInit() {
    const exist = await this.rolRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Rol). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Rol). Cargando registros en la base de datos.',
    );

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
  }
}
