import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientInput } from './client_input.entity';
import { Account } from '../account/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientInputSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(ClientInput)
    private clientInputRepository: Repository<ClientInput>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.clientInputRepository.find();

    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (ClientInput). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (ClientInput). Cargando registros en la base de datos.',
    );
    await new Promise((resolve) => setTimeout(resolve, 800)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);

    await this.clientInputRepository.query(
      'DROP TRIGGER IF EXISTS client_input_public_id;',
    );
    await this.clientInputRepository.query(
      'CREATE TRIGGER client_input_public_id before INSERT  on client_input for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from client_input WHERE account_id = NEW.account_id);  END',
    );

    const inputs = [
      {
        label: 'Apellido de Esposo',
        account_id: accounts[0].id,
        public_id: 0,
      },
      {
        label: 'Conocido/a por',
        account_id: accounts[0].id,
        public_id: 0,
      },
    ];

    for (const input of inputs) {
      await this.clientInputRepository.save(input);
    }

    console.log('Cargando registros de ClientInput en la base de datos...');
  }
}
