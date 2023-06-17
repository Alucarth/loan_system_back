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

    findPersonById(id:number)
    {
        return this.cityRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdateCityDto): Promise<City> {
        const account = await this.cityRepository.findOneBy({id:id});
        if (!account) {
            throw new NotFoundException('Account not found');
        }
        const updatedAccount = Object.assign(account, updateData);
        return this.cityRepository.save(updatedAccount);
    }
    
    async updateAccountById(id: number, updateData: Partial<UpdateCityDto>): Promise<City> {
        const account = await this.cityRepository.findOneBy({id:id});
        if (!account) {
            throw new NotFoundException('Account not found');
        }
        const updatedAccount = Object.assign(account, updateData);
        return this.cityRepository.save(updatedAccount);
    }

    async deleteById(id: number): Promise<void> {
        const account = await this.cityRepository.findOneBy({id:id});
        if (!account) {
          throw new NotFoundException('Account not found!');
        }
        await this.cityRepository.delete(id);
    }

 }