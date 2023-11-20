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
import { LocationTypeService } from './location_type.service';
import { CreateLocationDto } from './location_type.dto';

@ApiTags('LocationType')
@UseGuards(JwtAuthGuard)
@Controller('location_type')
export class LocationTypeController {
  constructor(private readonly _zoneService: LocationTypeService) {}

  @Get()
  async findAll(@Request() req: any) {
    return this._zoneService.findAll(req.user);
  }

  @Post()
  async create(
    @Body() propertyTypeDate: CreateLocationDto,
    @Request() req: any,
  ) {
    return await this._zoneService.create(req.user, propertyTypeDate);
  }
}
