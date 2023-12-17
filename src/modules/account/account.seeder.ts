import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Account } from './account.entity';
import { AccountService } from 'src/modules/account/account.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountSeeder implements OnModuleInit {
  constructor(
    private readonly _accountService: AccountService,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    //await this.accountRepository.query('TRUNCATE TABLE account RESTART IDENTITY CASCADE');
    const exist = await this.accountRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Account). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Account). Cargando registros en la base de datos.',
    );
    const accountData = [
      {
        account_name: 'Cuenta 1',
        company_name: 'Empresa 1',
        logo_url: 'https://ejemplo.com/logo1.png',
        interval: 30,
        // Agregar más datos de prueba si es necesario
      },
      {
        account_name: 'Cuenta 2',
        company_name: 'Empresa 2',
        logo_url: 'https://ejemplo.com/logo2.png',
        interval: 60,
        // Agregar más datos de prueba si es necesario
      },
      // Agregar más objetos con datos de prueba
    ];

    for (const account of accountData) {
      await this.accountRepository.save(account);
    }
  }
}
