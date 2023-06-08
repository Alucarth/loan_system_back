import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

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
}
