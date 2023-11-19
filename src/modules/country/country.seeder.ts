import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Country } from './country.entity';
import { Repository } from 'typeorm';
import { CountryService } from './country.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountrySeeder implements OnModuleInit {
  constructor(
    private readonly countryService: CountryService,
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async onModuleInit() {
    // await this.countryRepository.query('TRUNCATE TABLE country RESTART IDENTITY CASCADE');
    const exist = await this.countryRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Country). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Country). Cargando registros en la base de datos.',
    );
    const countriesData = [
      { name: 'Bolivia', short_name: 'BO' },
      { name: 'Argentina', short_name: 'AR' },
      { name: 'Brazil', short_name: 'BR' },
      { name: 'Canada', short_name: 'CA' },
      { name: 'China', short_name: 'CN' },
      { name: 'France', short_name: 'FR' },
      { name: 'Germany', short_name: 'DE' },
      { name: 'India', short_name: 'IN' },
      { name: 'Italy', short_name: 'IT' },
      { name: 'Japan', short_name: 'JP' },
    ];

    for (const data of countriesData) {
      const country = new Country();
      country.name = data.name;
      country.short_name = data.short_name;

      await this.countryService.create(country);
    }
  }
}
