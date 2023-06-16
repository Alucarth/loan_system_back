import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CityService } from 'src/services/city/city.service';

@ApiTags('City')
@Controller('city')
export class CityController {
    constructor(private readonly _cityService:CityService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._cityService.findAll()
    }
}
