import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePersonDto } from './create-person.dto';
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

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() personData: CreatePersonDto){
        console.log('personData',personData)
        let person = await this._personService.create(personData)
        //guardar las direcciones tambien 
        // personData.addresses.forEach(address => {
        //     let payload = address
        //     payload.person = person
        //     this._addressService.create(payload)
        // });

        return person
    }
}
