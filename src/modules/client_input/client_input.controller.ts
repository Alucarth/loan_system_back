import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
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
}
