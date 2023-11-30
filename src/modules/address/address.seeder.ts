import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { AddressService } from './address.service';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { Person } from '../person/person.entity';
import { City } from '../city/city.entity';
import { CreateAddressDTO } from './address.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressSeeder implements OnModuleInit {
  constructor(
    private readonly _addressService: AddressService,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(City)
    private cityRepository: Repository<City>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async onModuleInit() {
    //await this.branchRepository.query('TRUNCATE TABLE branch RESTART IDENTITY CASCADE');
    const exist = await this.addressRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Address). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Address). Cargando registros en la base de datos.',
    );

    await this.addressRepository.query(
      'DROP TRIGGER IF EXISTS address_public_id;',
    );
    await this.addressRepository.query(
      'CREATE TRIGGER address_public_id before INSERT  on address for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from address WHERE account_id = NEW.account_id);  END',
    );
  }
}
