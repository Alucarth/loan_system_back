import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GuarantyTypeService } from './guaranty_type.service';
import { GuarantyType } from './guaranty_type.entity';

@Injectable()
export class GuarantyTypeSeeder implements OnModuleInit {
  constructor(
    private readonly guarantyTypeService: GuarantyTypeService,
    @Inject('GUARANTY_TYPE_REPOSITORY')
    private guarantyTypeRepository: Repository<GuarantyType>,
  ) {}

  async onModuleInit() {
    // await this.cityRepository.query('TRUNCATE TABLE city RESTART IDENTITY CASCADE');
    const exist = await this.guarantyTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Guaranty Type). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Guaranty Type). Cargando registros en la base de datos.',
    );

    const sqlInsertQuery = `INSERT INTO guaranty_type (name, description, state, user_id) 
    VALUES  ( "nombre 1", "descripcion1", true , 1), 
            ( "nombre 2", "descripcion2", false , 2), 
            ( "nombre 3", "descripcion3", true, 3);`; 
    // use `` solo para ser mas ordenado e ir agregando facilmente mas datos en el seeder por que funciona "" sin problemas

    try {
        await this.guarantyTypeRepository.query(sqlInsertQuery);
        console.log('Seeder (Guaranty Type) completado.');
    } catch (error) {
        console.error('Error en el Seeder (Guaranty Type) :', error);
    }

  }
}
