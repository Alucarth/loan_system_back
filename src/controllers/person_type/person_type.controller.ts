import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersonTypeService } from 'src/services/person_type/person_type.service';
import { CreatePersonTypeDto, UpdatePersonTypeDto } from './person_type.dto';
@ApiTags('PersonType')
@Controller('person_type')
export class PersonTypeController {
    constructor (private readonly _personTypeService: PersonTypeService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._personTypeService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findPersonTypeById(@Param('id',ParseIntPipe) id:number){
        return this._personTypeService.findPersonTypeById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() personTypeData: CreatePersonTypeDto){
        console.log('personTypeData',personTypeData)
        let response = await this._personTypeService.create(personTypeData)
        return response
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdatePersonTypeDto) {
        return this._personTypeService.updateById(id, updateData);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updatePersonTypeById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdatePersonTypeDto>) {
        return this._personTypeService.updatePersonTypeById(id, updateData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this._personTypeService.deleteById(id);
    }
}
