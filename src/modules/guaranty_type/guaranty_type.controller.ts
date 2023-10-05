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
import { GuarantyTypeService } from './guaranty_type.service';
import { GuarantyType } from './guaranty_type.entity';
import { CreateGuarantyTypeDto, UpdateGuarantyTypeDto } from './guaranty_type.dto';
  
  @ApiTags('GuarantyType')
  @Controller('guarantyType')
  export class GuarantyTypeController {
    constructor(private readonly _guarantyTypeService: GuarantyTypeService) {}
  
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<GuarantyType[]> {
      return this._guarantyTypeService.findAll();
    }
  
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findGuarantyTypeById(@Param('id', ParseIntPipe) id: number) {
      return this._guarantyTypeService.findGuarantyTypeById(id);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() GuarantyTypeData: CreateGuarantyTypeDto): Promise<GuarantyType> {
      console.log('ingresando');
      console.log('creditTypeData', GuarantyTypeData);
      const response = await this._guarantyTypeService.create(GuarantyTypeData);
  
      return response;
    }
  
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: UpdateGuarantyTypeDto,
    ) {
      return this._guarantyTypeService.updateById(id, updateData);
    }
  
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updateGuarantyTypeById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: Partial<UpdateGuarantyTypeDto>,
    ) {
      return this._guarantyTypeService.updateGuarantyTypeById(id, updateData);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
      return this._guarantyTypeService.deleteById(id);
    }
  }
  