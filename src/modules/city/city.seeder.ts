import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { City } from './city.entity';
import { Repository } from 'typeorm';
import { CityService } from './city.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CitySeeder implements OnModuleInit {
  constructor(
    // private readonly cityService: CityService,
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async onModuleInit() {
    // await this.cityRepository.query('TRUNCATE TABLE city RESTART IDENTITY CASCADE');
    const exist = await this.cityRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (City). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (City). Cargando registros en la base de datos.',
    );
    const cities = [
      { name: 'La Paz', short_name: 'LP' },
      { name: 'Santa Cruz', short_name: 'SC' },
      { name: 'Cochabamba', short_name: 'CB' },
      { name: 'Oruro', short_name: 'OR' },
      { name: 'Potosi', short_name: 'PT' },
      { name: 'Beni', short_name: 'BN' },
      { name: 'Pando', short_name: 'PN' },
      { name: 'Chuquisaca', short_name: 'CH' },
      { name: 'Tarija', short_name: 'TJ' },
    ];

    for (const data of cities) {
      const city = new City();
      city.name = data.name;
      city.short_name = data.short_name;

      await this.cityRepository.save(city);
    }
  }
}
