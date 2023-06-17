import { Inject, Injectable } from '@nestjs/common';

import { Country } from 'src/modules/country/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
    constructor(
        @Inject('COUNTRY_REPOSITORY')
        private countryRepository: Repository<Country>
    ){}

    async  findAll(): Promise<Country[]>{
        return this.countryRepository.find()
    }
}
