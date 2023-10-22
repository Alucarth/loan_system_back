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
import { ApiTags } from '@nestjs/swagger';
import { CreateClientTypeDto, UpdateClientTypeDto } from './client_type.dto';
import { ClientTypeService } from './client_type.service';
import { ClientType } from './client_type.entity';

@ApiTags('ClientType')
@Controller('clientType')
export class ClientTypeController {
  constructor(private readonly _clientTypeService: ClientTypeService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<ClientType[]> {
    return this._clientTypeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findClientTypeById(@Param('id', ParseIntPipe) id: number) {
    return this._clientTypeService.findClientTypeById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() clientTypeData: CreateClientTypeDto,
  ): Promise<ClientType> {
    console.log('ingresando');
    console.log('clientTypeData', clientTypeData);
    const response = await this._clientTypeService.create(clientTypeData);

    return response;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateClientTypeDto,
  ) {
    return this._clientTypeService.updateById(id, updateData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateClientTypeById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UpdateClientTypeDto>,
  ) {
    return this._clientTypeService.updateClientTypeById(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._clientTypeService.deleteById(id);
  }
}
