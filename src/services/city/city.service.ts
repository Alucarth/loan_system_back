import { Inject, Injectable } from "@nestjs/common";
import { City } from "src/modules/city/city.entity";
import { Repository } from "typeorm";

 @Injectable()
 export class CityService{
    constructor(
        @Inject('CITY_REPOSITORY')
        private cityRepository: Repository<City>
    ){}

    async findAll(): Promise<City[]>{
        return this.cityRepository.find()
    }


 }