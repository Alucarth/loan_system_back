import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientValue } from './client_value.entity';

@Injectable()
export class ClientValueSeeder implements OnModuleInit {
  constructor(
    @Inject('CLIENT_VALUE_RESPOSITORY')
    private clientValueRepository: Repository<ClientValue>,
  ) {}

  async onModuleInit() {
    const exist = await this.clientValueRepository.find();

    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (ClientValue). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (ClientValue). Cargando registros en la base de datos.',
    );

    await this.clientValueRepository.query(
      'DROP TRIGGER IF EXISTS client_value_public_id;',
    );
    await this.clientValueRepository.query(
      'CREATE TRIGGER client_value_public_id before INSERT  on client_value for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from client_value WHERE account_id = NEW.account_id);  END',
    );
  }
}
