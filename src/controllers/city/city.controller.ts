import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CityService } from 'src/services/city/city.service';
import { UpdateCityDto } from 'src/controllers/city/update-city.dto'
import { CreateCityDto } from 'src/controllers/city/create-city.dto'

@ApiTags('City')
@Controller('city')
export class CityController {
    constructor(private readonly _cityService:CityService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._cityService.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findAccountById(@Param('id',ParseIntPipe) id:number){
        return this._cityService.findPersonById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() cityData: CreateCityDto){
        console.log('cityData',cityData)
        let response = await this._cityService.create(cityData)
        //guardar las direcciones tambien 
        
        return response
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateCityDto) {
        return this._cityService.updateById(id, updateData);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updateAccountById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateCityDto>) {
        return this._cityService.updateAccountById(id, updateData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this._cityService.deleteById(id);
    }
}
