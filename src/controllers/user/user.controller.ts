import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private readonly _userService: UserService){

    }

    @Get()
    async findAll(){
        return this._userService.findAll();
    }

    @Get('lista')
    async lista(){
        return this._userService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() userData: CreateUserDto){
        console.log('userData',userData)
        let response = await this._userService.create(userData)
        return response
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateUserDto) {
        return this._userService.updateById(id, updateData);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateUserDto>) {
        return this._userService.updateUserById(id, updateData);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this._userService.deleteById(id);
    }
}
