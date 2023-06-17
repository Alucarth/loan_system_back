import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from 'src/controllers/country/create-country.dto';
import { UpdateCountryDto } from 'src/controllers/country/update-country.dto';
import { Country } from 'src/modules/country/country.entity';
import { Repository } from 'typeorm';

@Injectable()
 export class CountryService{
    constructor(
        @Inject('COUNTRY_REPOSITORY')
        private countryRepository: Repository<Country>
    ){}

    async findAll(): Promise<Country[]>{
        return this.countryRepository.find()
    }
    
    create(country_dto: CreateCountryDto): Promise<CreateCountryDto> 
    {
        return this.countryRepository.save(country_dto);
    }

    findCountryById(id:number)
    {
        return this.countryRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdateCountryDto): Promise<Country> {
        const country = await this.countryRepository.findOneBy({id:id});
        if (!country) {
            throw new NotFoundException('country not found');
        }
        const updatedCountry = Object.assign(country, updateData);
        return this.countryRepository.save(updatedCountry);
    }
    
    async updateCountryById(id: number, updateData: Partial<UpdateCountryDto>): Promise<Country> {
        const country = await this.countryRepository.findOneBy({id:id});
        if (!country) {
            throw new NotFoundException('country not found');
        }
        const updatedCountry = Object.assign(country, updateData);
        return this.countryRepository.save(updatedCountry);
    }

    async deleteById(id: number): Promise<void> {
        const country = await this.countryRepository.findOneBy({id:id});
        if (!country) {
          throw new NotFoundException('country not found!');
        }
        await this.countryRepository.delete(id);
    }

 }