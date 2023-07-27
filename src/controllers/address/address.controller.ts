import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAddressDTO, UpdateAddressDTO } from './create-address.dto';
import { AddressService } from 'src/services/address/address.service';

@ApiTags('Address')
@Controller('address')
export class AddressController {

    constructor(private readonly _addressService: AddressService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._addressService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() accountData: CreateAddressDTO){
        console.log('acountData',accountData)
        let response = await this._addressService.create(accountData)
        return response
    }
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findAddressById(@Param('id',ParseIntPipe) id:number){
        return this._addressService.findAddressById(id)
    } 
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateAddressDTO) {
        return this._addressService.updateById(id, updateData);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updateAddressById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateAddressDTO>) {
        return this._addressService.updateAddressById(id, updateData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this._addressService.deleteById(id);
    }
}
