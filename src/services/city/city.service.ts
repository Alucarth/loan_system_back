import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { City } from "src/modules/city/city.entity";
import { Repository } from "typeorm";
import { UpdateCityDto } from 'src/controllers/city/update-city.dto'
import { CreateCityDto } from 'src/controllers/city/create-city.dto'

 @Injectable()
 export class CityService{
    constructor(
        @Inject('CITY_REPOSITORY')
        private cityRepository: Repository<City>
    ){}

    async findAll(): Promise<City[]>{
        return this.cityRepository.find()
    }

    create(city_dto: CreateCityDto): Promise<CreateCityDto> 
    {
        return this.cityRepository.save(city_dto);
    }

    findCityById(id:number)
    {
        return this.cityRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdateCityDto): Promise<City> {
        const city = await this.cityRepository.findOneBy({id:id});
        if (!city) {
            throw new NotFoundException('City not found');
        }
        const updatedCity = Object.assign(city, updateData);
        return this.cityRepository.save(updatedCity);
    }
    
    async updateCityById(id: number, updateData: Partial<UpdateCityDto>): Promise<City> {
        const city = await this.cityRepository.findOneBy({id:id});
        if (!city) {
            throw new NotFoundException('City not found');
        }
        const updatedCity = Object.assign(city, updateData);
        return this.cityRepository.save(updatedCity);
    }

    async deleteById(id: number): Promise<void> {
        const city = await this.cityRepository.findOneBy({id:id});
        if (!city) {
          throw new NotFoundException('City not found!');
        }
        await this.cityRepository.delete(id);
    }

 }