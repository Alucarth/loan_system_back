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
import { ZoneService } from './zone.service';
import { ZoneDto } from './zone.dto';

@ApiTags('Zone')
@UseGuards(JwtAuthGuard)
@Controller('zone')
export class ZoneController {
  constructor(private readonly _zoneService: ZoneService) {}

  @Get()
  async findAll(@Request() req: any) {
    return this._zoneService.findAll(req.user);
  }

  @Post()
  async create(@Body() zoneData: ZoneDto, @Request() req: any) {
    return await this._zoneService.create(req.user, zoneData);
  }
}
