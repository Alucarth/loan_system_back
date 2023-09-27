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

    const cities = await this.cityRepository.find();
    const persons = await this.personRepository.find();

    const addressData = [
      {
        person_id: persons[0],
        city_id: cities[0],
        address: 'Calle Principal 123',
        phone_number: 12345678,
        zone: 'Residencial',
        property: 'Casa',
        address_type: 'Residencia',
        comments: 'Cerca del parque',
        status: 'Activo',
      },
      {
        person_id: persons[0],
        city_id: cities[1],
        address: 'Calle Principal 123',
        phone_number: 12345678,
        zone: 'Residencial',
        property: 'Casa',
        address_type: 'Residencia',
        comments: 'Cerca del parque',
        status: 'Activo',
      },

      // Agregar más objetos con datos de prueba
    ];

    for (const data of addressData) {
      const address = new CreateAddressDTO();

      address.address = data.address;
      address.phone_number = data.phone_number;
      address.zone = data.zone;
      address.property = data.property;
      address.address_type = data.address_type;
      address.comments = data.comments;
      address.status = data.status;
      address.city_id = data.city_id.id;
      address.person_id = data.person_id.id;

      await this._addressService.create(address);
    }
  }
}
