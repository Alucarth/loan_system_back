import { Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientType } from './client_type.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientTypeSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ClientType)
    private clientTypeRepository: Repository<ClientType>,
  ) {}

  async onModuleInit() {
    const exist = await this.clientTypeRepository.find();
    // console.log(exist);
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (client_type). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (client_type). Cargando registros en la base de datos.',
    );
    await this.clientTypeRepository.query(
      'DROP TRIGGER IF EXISTS client_type_public_id;',
    );
    await this.clientTypeRepository.query(
      'CREATE TRIGGER client_type_public_id before INSERT  on client_type for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from client_type WHERE account_id = NEW.account_id);  END',
    );
    await new Promise((resolve) => setTimeout(resolve, 600)); //asumiendo que se creo el usuario
    const [accounts, users] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
      this.userRepository.find(),
    ]);
    const client_types = [
      {
        name: 'Administrado',
        account_id: accounts[0]?.id,
        public_id: 0,
        user_id: users[0]?.id,
      },
      {
        name: 'Oficial de Credito',
        account_id: accounts[0]?.id,
        public_id: 0,
        user_id: users[0]?.id,
      },
    ];

    for (const client_type of client_types) {
      this.clientTypeRepository.save(client_type);
    }
  }
}
