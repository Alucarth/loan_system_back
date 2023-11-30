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
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateClientTypeDto, UpdateClientTypeDto } from './client_type.dto';
import { ClientTypeService } from './client_type.service';
import { ClientType } from './client_type.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('ClientType')
@UseGuards(JwtAuthGuard)
@Controller('clientType')
export class ClientTypeController {
  constructor(private readonly _clientTypeService: ClientTypeService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Request() req: any): Promise<ClientType[]> {
    return this._clientTypeService.findAll(req.user);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findClientTypeById(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: any,
  ) {
    return this._clientTypeService.findClientTypeById(id, req.user);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() clientTypeData: CreateClientTypeDto,
    @Request() req: any,
  ): Promise<ClientType> {
    // console.log('ingresando');
    // console.log(req.user);
    console.log('clientTypeData', clientTypeData);
    const response = await this._clientTypeService.create(
      clientTypeData,
      req.user,
    );

    return response;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() clientTypeData: UpdateClientTypeDto,
    @Request() req: any,
  ) {
    return this._clientTypeService.updateById(id, clientTypeData, req.user);
  }

  // @Patch(':id')
  // @HttpCode(HttpStatus.OK)
  // async updateClientTypeById(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateData: Partial<UpdateClientTypeDto>,
  // ) {
  //   return this._clientTypeService.updateClientTypeById(id, updateData);
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
    return this._clientTypeService.deleteById(id, req.user);
  }
}
