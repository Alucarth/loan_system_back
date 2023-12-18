import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PersonalReferenceService } from './personal_reference.service';
import { CreatePersonalReferenceDTO } from './personal_reference.dto';

@ApiTags('PersonalReference')
@UseGuards(JwtAuthGuard)
@Controller('personal_reference')
export class PersonalReferenceController {
  constructor(
    private readonly _personal_reference_Service: PersonalReferenceService,
  ) {}

  @Get()
  async findAll(@Request() req: any) {
    return this._personal_reference_Service.findAll(req.user);
  }

  @Get(':client_public_id')
  @HttpCode(HttpStatus.OK)
  async findAllByClient(
    @Param('client_public_id', ParseIntPipe) client_public_id: number,
    @Request() req: any,
  ) {
    return this._personal_reference_Service.findAllByClientId(
      client_public_id,
      req.user,
    );
  }

  @Post()
  async create(
    @Body() personalReferenceData: CreatePersonalReferenceDTO,
    @Request() req: any,
  ) {
    console.log(personalReferenceData);
    return await this._personal_reference_Service.create(
      personalReferenceData,
      req.user,
    );
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: CreatePersonalReferenceDTO,
    @Request() req: any,
  ) {
    return this._personal_reference_Service.updateById(
      id,
      updateData,
      req.user,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
    return this._personal_reference_Service.deleteById(id, req.user);
  }
}
