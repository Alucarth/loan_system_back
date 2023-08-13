import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { User } from './user.entity';

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
    async create(@Body() userData: User){
        console.log('userData',userData)
        let response = await this._userService.create(userData)
        return response
    }
    
}
