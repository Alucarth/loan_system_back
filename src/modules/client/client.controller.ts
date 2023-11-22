import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ClientService } from './client.service';
import { Client } from './client.entity';
import { ClientDto } from './client.dto';

@ApiTags('Client')
@UseGuards(JwtAuthGuard)
@Controller('client')
export class ClientController {
  constructor(private readonly _clientService: ClientService) {}

  @Get()
  async findAll(@Request() req: any): Promise<Client[]> {
    return await this._clientService.findAll(req.user);
  }

  @Get(':id')
  async findClientById(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: any,
  ) {
    return await this._clientService.findById(id, req.user);
  }

  @Post()
  async create(
    @Body() clientData: ClientDto,
    @Request() req: any,
  ): Promise<Client> {
    console.log('clientData', clientData);
    return await this._clientService.create(clientData, req.user);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() clientData: ClientDto,
    @Request() req: any,
  ) {
    return this._clientService.updateById(id, clientData, req.user);
  }

  @Delete('id')
  async delete(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
    return this._clientService.delete(id, req.user);
  }
}
