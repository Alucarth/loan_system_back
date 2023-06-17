import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
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
}
