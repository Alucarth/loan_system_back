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
import { CreateOcupationDto, UpdateOcupationDto } from './ocupation.dto';
import { OcupationService } from './ocupation.service';

@ApiTags('Ocupation')
@Controller('ocupation')
export class OcupationController {
  constructor(private readonly _ocupationService: OcupationService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this._ocupationService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOcupationById(@Param('id', ParseIntPipe) id: number) {
    return this._ocupationService.findOcupationById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() ocupationData: CreateOcupationDto) {
    console.log('personTypeData', ocupationData);
    const response = await this._ocupationService.create(ocupationData);
    return response;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateOcupationDto,
  ) {
    return this._ocupationService.updateById(id, updateData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateOcupationById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UpdateOcupationDto>,
  ) {
    return this._ocupationService.updateOcupationById(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._ocupationService.deleteById(id);
  }
}
