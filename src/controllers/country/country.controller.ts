import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';

import { CreateCountryDto } from './create-country.dto';
import { UpdateCountryDto } from './update-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from 'src/services/country/country.service';

@ApiTags('Country')
@Controller('country')
export class CountryController {
    constructor(private readonly _countryService: CountryService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._countryService.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findCountryById(@Param('id',ParseIntPipe) id:number){
        return this._countryService.findCountryById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() countryData: CreateCountryDto){
        console.log('countryData',countryData)
        let response = await this._countryService.create(countryData)
        //guardar las direcciones tambien 
        
        return response
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateCountryDto) {
        return this._countryService.updateById(id, updateData);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updateCountryById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateCountryDto>) {
        return this._countryService.updateCountryById(id, updateData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this._countryService.deleteById(id);
    }
}
