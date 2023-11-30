import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';
import { LocationType } from './location_type.entity';

@Injectable()
export class LocationTypeSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(LocationType)
    private locationTypeRepository: Repository<LocationType>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.locationTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (LocationType). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (LocationType).');
    console.log(
      'Esperando a los datos de las tablas relacionadas a LocationType',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    await this.locationTypeRepository.query(
      'DROP TRIGGER IF EXISTS location_type_public_id;',
    );
    await this.locationTypeRepository.query(
      'CREATE TRIGGER location_type_public_id before INSERT  on location_type for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from location_type WHERE account_id = NEW.account_id);  END',
    );

    const locations = [
      {
        name: 'Propio',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Alquiler',
        account: accounts[0],
        public_id: 0,
      },
      {
        name: 'Anticretico',
        account: accounts[0],
        public_id: 0,
      },
    ];

    for (const location of locations) {
      await this.locationTypeRepository.save(location);
    }
  }
}
