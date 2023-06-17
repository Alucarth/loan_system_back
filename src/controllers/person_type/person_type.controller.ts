import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersonTypeService } from 'src/services/person_type/person_type.service';
@ApiTags('PersonType')
@Controller('person_type')
export class PersonTypeController {
    constructor (private readonly _personTypeService: PersonTypeService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._personTypeService.findAll();
    }
}
