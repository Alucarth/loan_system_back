import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { ActivityType } from './activity_type.entity';

@Injectable()
export class ActivityTypeSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(ActivityType)
    private activityTypeRepository: Repository<ActivityType>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.activityTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (activityType). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (activityType).');
    console.log(
      'Esperando a los datos de las tablas relacionadas a activityType',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    await this.activityTypeRepository.query(
      'DROP TRIGGER IF EXISTS activity_type_public_id;',
    );
    await this.activityTypeRepository.query(
      'CREATE TRIGGER activity_type_public_id before INSERT  on activity_type for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from activity_type WHERE account_id = NEW.account_id);  END',
    );

    const acivity_types = [
      {
        name: 'Asalariado',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Independiente',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Rentista',
        account: accounts[0],
        public_id: 0,
      },
    ];

    for (const activity_type of acivity_types) {
      await this.activityTypeRepository.save(activity_type);
    }
  }
}
