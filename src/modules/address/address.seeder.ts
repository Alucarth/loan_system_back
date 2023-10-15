import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { AddressService } from './address.service';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { Person } from '../person/person.entity';
import { City } from '../city/city.entity';
import { CreateAddressDTO } from './address.dto';

@Injectable()
export class AddressSeeder implements OnModuleInit {
  constructor(
    private readonly _addressService: AddressService,
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
    @Inject('CITY_REPOSITORY')
    private cityRepository: Repository<City>,
    @Inject('PERSON_REPOSITORY')
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
  }
}
