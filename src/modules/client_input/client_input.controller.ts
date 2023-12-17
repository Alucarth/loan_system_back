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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ClientInputService } from './client_input.service';
import { CreateClientInputDto } from './client.dto';

@ApiTags('ClientInput')
@UseGuards(JwtAuthGuard)
@Controller('client_input')
export class ClientInputController {
  constructor(private readonly _clientInputService: ClientInputService) {}

  @Get()
  async findAll(@Request() req: any) {
    return this._clientInputService.findAll(req.user);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(
    @Body() clientInputData: CreateClientInputDto,
    @Request() req: any,
  ) {
    return await this._clientInputService.create(clientInputData, req);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() clientInputData: CreateClientInputDto,
    @Request() req: any,
  ) {
    return await this._clientInputService.updateById(id, clientInputData, req.user);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  async patchById(
    @Param('id', ParseIntPipe) id: number,
    @Body() clientInputData: CreateClientInputDto,
    @Request() req: any,
  ) {
    return await this._clientInputService.patchById(id, clientInputData, req.user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  async softDeleteById(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: any,
  ) {
    return this._clientInputService.softDeleteById(id, req.user);
  }

}
