import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreatePersonDto } from './create-person.dto';
import { UpdatePersonDto } from './update-person.dto';
import { PersonService } from 'src/services/person/person.service';
import { ApiTags } from '@nestjs/swagger';
import { AddressService } from 'src/services/address/address.service';
@ApiTags('Person')
@Controller('person')
export class PersonController {
    constructor(private readonly _personService: PersonService,
            private readonly _addressService: AddressService
        ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._personService.findAll()
    }

    @Get('clients')
    @HttpCode(HttpStatus.OK)
    async findAllClients(){
        return await this._personService.findAllClients()
    }


    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findPersonById(@Param('id',ParseIntPipe) id:number){
        return this._personService.findPersonById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() personData: CreatePersonDto){
        console.log('personData aaaaaaaaaa',personData)
        let person = await this._personService.create(personData)
        return person
    }

    @Post('reference')
    @HttpCode(HttpStatus.CREATED)
    async createReference(@Body() personArray: any[]){
        console.log('array person',personArray)
        personArray.forEach(async (person: CreatePersonDto) => {
            await this._personService.create(person)
            
        });
        // aqui devolver array con lo guardado tarea para el pasante jajaja
        return 'person reference register'
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdatePersonDto) {
        return this._personService.updateById(id, updateData);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updatePersonById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdatePersonDto>) {
        return this._personService.updatePersonById(id, updateData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this._personService.deleteById(id);
    }
}
