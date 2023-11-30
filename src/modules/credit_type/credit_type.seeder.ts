import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreditTypeService } from './credit_type.service';
import { CreditType } from './credit_type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreditTypeSeeder implements OnModuleInit {
  constructor(
    private readonly creditTypeService: CreditTypeService,
    @InjectRepository(CreditType)
    private clientTypeRepository: Repository<CreditType>,
  ) {}

  async onModuleInit() {
    // await this.cityRepository.query('TRUNCATE TABLE city RESTART IDENTITY CASCADE');
    // const exist = await this.clientTypeRepository.find();
    // if (exist.length > 0) {
    //   console.log(
    //     'Saltando proceso del seeder -> (Credit Type). Ya existen registros en la base de datos.',
    //   );
    //   return;
    // }
    // console.log(
    //   'Iniciando el seeder -> (Credit Type). Cargando registros en la base de datos.',
    // );
    // const sqlInsertQuery = `INSERT INTO credit_type (state, user_id)
    // VALUES  ( true , 1),
    //         ( false , 2),
    //         ( true, 3);`;
    // // use `` solo para ser mas ordenado e ir agregando facilmente mas datos en el seeder por que funciona "" sin problemas
    // try {
    //   await this.clientTypeRepository.query(sqlInsertQuery);
    //   console.log('Seeder (Client Type) completado.');
    // } catch (error) {
    //   console.error('Error en el Seeder (Client Type) :', error);
    // }
  }
}
