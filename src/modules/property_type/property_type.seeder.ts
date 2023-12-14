import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyType } from './property_type.entity';
import { Repository } from 'typeorm';
import { Account } from '../account/account.entity';

@Injectable()
export class PropertyTypeSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(PropertyType)
    private propertyTypeRepository: Repository<PropertyType>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async onModuleInit() {
    const exist = await this.propertyTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (PropertyType). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log('Iniciando el seeder -> (PropertyType).');
    console.log(
      'Esperando a los datos de las tablas relacionadas a PropertyType',
    );
    await new Promise((resolve) => setTimeout(resolve, 500)); //asumiendo que se creo el usuario
    const [accounts] = await Promise.all([
      // this.cityRepository.find(),
      // this.countryRepository.find(),
      this.accountRepository.find(),
    ]);
    await this.propertyTypeRepository.query(
      'DROP TRIGGER IF EXISTS property_type_public_id;',
    );
    await this.propertyTypeRepository.query(
      'CREATE TRIGGER property_type_public_id before INSERT  on property_type for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from property_type WHERE account_id = NEW.account_id);  END',
    );

    const properties = [
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
      {
        name: 'Otros',
        account: accounts[0],
        public_id: 0,
      },
    ];

    for (const property of properties) {
      await this.propertyTypeRepository.save(property);
    }
  }
}
