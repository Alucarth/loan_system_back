import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePersonDto } from './create-person.dto';
import { PersonService } from 'src/services/person/person.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Person')
@Controller('person')
export class PersonController {
    constructor(private readonly _personService: PersonService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._personService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() personData: CreatePersonDto){
        console.log('personData',personData)
        let response = await this._personService.create(personData)
        //guardar las direcciones tambien 
        
        return response
    }
}
