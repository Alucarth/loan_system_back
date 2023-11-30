import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async onModuleInit() {
    const exist = await this.clientRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (client). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (client).');
    console.log('Esperando a los datos de las tablas relacionadas a client');

    await this.clientRepository.query(
      'DROP TRIGGER IF EXISTS client_public_id;',
    );
    await this.clientRepository.query(
      'CREATE TRIGGER client_public_id before INSERT  on client for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from client WHERE account_id = NEW.account_id);  END',
    );
  }
}
