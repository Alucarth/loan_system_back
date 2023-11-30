import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { ActivityFrecuency } from './activity_frecuency.entity';

@Injectable()
export class ActivityFrecuencySeeder implements OnModuleInit {
  constructor(
    @InjectRepository(ActivityFrecuency)
    private activityFrecuencyRepository: Repository<ActivityFrecuency>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.activityFrecuencyRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (activityFrecuency). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (activityFrecuency).');
    console.log(
      'Esperando a los datos de las tablas relacionadas a activityFrecuency',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    await this.activityFrecuencyRepository.query(
      'DROP TRIGGER IF EXISTS activity_frecuency_public_id;',
    );
    await this.activityFrecuencyRepository.query(
      'CREATE TRIGGER activity_frecuency_public_id before INSERT  on activity_frecuency for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from activity_frecuency WHERE account_id = NEW.account_id);  END',
    );

    const acivity_frecuencies = [
      {
        name: 'Diario',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Mensual',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Anual',
        account: accounts[0],
        public_id: 0,
      },
    ];

    for (const property of acivity_frecuencies) {
      await this.activityFrecuencyRepository.save(property);
    }
  }
}
