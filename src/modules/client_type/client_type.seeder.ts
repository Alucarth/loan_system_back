import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientTypeService } from './client_type.service';
import { Repository } from 'typeorm';
import { ClientType } from './client_type.entity';
import { async } from 'rxjs';
import { UserService } from '../user/user.service';
import { AccountService } from '../account/account.service';

@Injectable()
export class ClientTypeSeeder implements OnModuleInit {
  constructor(
    private readonly clientTypeService: ClientTypeService,
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<ClientType>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<ClientType>,
    @Inject('CLIENT_TYPE_REPOSITORY')
    private clientTypeRepository: Repository<ClientType>,
  ) {}

  async onModuleInit() {
    const exist = await this.clientTypeRepository.find();
    console.log(exist);
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
    await new Promise((resolve) => setTimeout(resolve, 1000)); //asumiendo que se creo el usuario
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
      await this.clientTypeService.create(client_type);
    }
  }
}
