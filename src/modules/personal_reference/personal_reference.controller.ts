import {
  Body,
  Controller,
  Get,
  Post,
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
}
