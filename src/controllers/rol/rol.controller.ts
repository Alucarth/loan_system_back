import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateRolDto } from './create-rol.dto';
import { UpdateRolDto } from './update-rol.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolService } from 'src/services/rol/rol.service';

@ApiTags('Rol')
@Controller('rol')
export class RolController {
    constructor(private readonly _rolService:RolService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._rolService.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findRolById(@Param('id',ParseIntPipe) id:number){
        return this._rolService.findRolById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() rolData: CreateRolDto){
        console.log('rolData',rolData)
        let response = await this._rolService.create(rolData)
        //guardar las direcciones tambien 
        
        return response
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateRolDto) {
        return this._rolService.updateById(id, updateData);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updateRolById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateRolDto>) {
        return this._rolService.updateRolById(id, updateData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this._rolService.deleteById(id);
    }
}
