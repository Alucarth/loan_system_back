import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserRolDto, UpdateUserRolDto } from './user_rol.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserRolService } from './user_rol.services';

@ApiTags('UserRol')
@Controller('user_rol')
export class UserRolController {
  constructor(private readonly _userRolService: UserRolService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this._userRolService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findUserRolById(@Param('id', ParseIntPipe) id: number) {
    return this._userRolService.findUserRolById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() userRolData: CreateUserRolDto) {
    console.log('userRolData', userRolData);
    const response = await this._userRolService.create(userRolData);
    //guardar las direcciones tambien

    return response;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateUserRolDto,
  ) {
    return this._userRolService.updateById(id, updateData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateUserRolById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UpdateUserRolDto>,
  ) {
    return this._userRolService.updateUserRolById(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._userRolService.deleteById(id);
  }
}
