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
import { PropertyTypeService } from './property_type.service';
import { CreatePropertyDto } from './property_type.dto';

@ApiTags('PropertyType')
@UseGuards(JwtAuthGuard)
@Controller('property_type')
export class PropertyTypeController {
  constructor(private readonly _zoneService: PropertyTypeService) {}

  @Get()
  async findAll(@Request() req: any) {
    return this._zoneService.findAll(req.user);
  }

  @Post()
  async create(
    @Body() propertyTypeDate: CreatePropertyDto,
    @Request() req: any,
  ) {
    return await this._zoneService.create(req.user, propertyTypeDate);
  }
}
