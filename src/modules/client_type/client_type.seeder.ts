import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientTypeService } from './client_type.service';
import { Repository } from 'typeorm';
import { ClientType } from './client_type.entity';

@Injectable()
export class ClientTypeSeeder implements OnModuleInit {
  constructor(
    private readonly clientTypeService: ClientTypeService,
    @Inject('CLIENT_TYPE_REPOSITORY')
    private clientTypeRepository: Repository<ClientType>,
  ) {}

  async onModuleInit() {
    // await this.cityRepository.query('TRUNCATE TABLE city RESTART IDENTITY CASCADE');
    const exist = await this.clientTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Client Type). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Client Type). Cargando registros en la base de datos.',
    );

    const sqlInsertQuery = `INSERT INTO client_type (name, user_id) 
    VALUES  ('nombre 1', 1), 
            ('nombre 2', 2), 
            ('nombre 3', 3);`; 
    // use `` solo para ser mas ordenado e ir agregando facilmente mas datos en el seeder por que funciona "" sin problemas

    try {
        await this.clientTypeRepository.query(sqlInsertQuery);
        console.log('Seeder (Client Type) completado.');
    } catch (error) {
        console.error('Error en el Seeder (Client Type) :', error);
    }

  }
}
