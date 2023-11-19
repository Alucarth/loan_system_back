import { Inject, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Zone } from './zone.entity';
import { Account } from '../account/account.entity';

export class ZoneSeeder implements OnModuleInit {
  constructor(
    @Inject('ZONE_REPOSITORY')
    private zoneRepository: Repository<Zone>,
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.zoneRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Zone). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (Zone).');
    console.log('Esperando a los datos de las tablas relacionadas a Zone');

    await this.zoneRepository.query('DROP TRIGGER IF EXISTS zone_public_id;');
    await this.zoneRepository.query(
      'CREATE TRIGGER zone_public_id before INSERT  on zone for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from zone WHERE account_id = NEW.account_id);  END',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    const zones = [
      {
        name: 'Norte',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Sur',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Miraflores',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Sopocachi',
        account: accounts[0],
        public_id: 0,
      },
    ];

    for (const zone of zones) {
      await this.zoneRepository.save(zone);
    }
  }
}
