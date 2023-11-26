import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { ActivityClient } from './activity_client.entity';

@Injectable()
export class ActivityClientSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(ActivityClient)
    private activityClientRepository: Repository<ActivityClient>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.activityClientRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (activityClient). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (activityClient).');
    console.log(
      'Esperando a los datos de las tablas relacionadas a activityClient',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    // const [accounts] = await Promise.all([
    //   // this.cityRepository.find(),
    //   // this.countryRepository.find(),
    //   this.accountRepository.find(),
    // ]);
    await this.activityClientRepository.query(
      'DROP TRIGGER IF EXISTS activity_client_public_id;',
    );
    await this.activityClientRepository.query(
      'CREATE TRIGGER activity_client_public_id before INSERT  on activity_client for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from activity_client WHERE account_id = NEW.account_id);  END',
    );
  }
}
