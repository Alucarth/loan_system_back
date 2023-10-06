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
import { CreditTypeService } from './credit_type.service';
import { CreditType } from './credit_type.entity';
import { CreateCreditTypeDto, UpdateCreditTypeDto } from './credit_type.dto';
  
  @ApiTags('CreditType')
  @Controller('creditType')
  export class CreditTypeController {
    constructor(private readonly _creditTypeService: CreditTypeService) {}
  
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<CreditType[]> {
      return this._creditTypeService.findAll();
    }
  
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findCreditTypeById(@Param('id', ParseIntPipe) id: number) {
      return this._creditTypeService.findCreditTypeById(id);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() creditTypeData: CreateCreditTypeDto): Promise<CreditType> {
      console.log('ingresando');
      console.log('creditTypeData', creditTypeData);
      const response = await this._creditTypeService.create(creditTypeData);
  
      return response;
    }
  
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: UpdateCreditTypeDto,
    ) {
      return this._creditTypeService.updateById(id, updateData);
    }
  
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async updateCreditTypeById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: Partial<UpdateCreditTypeDto>,
    ) {
      return this._creditTypeService.updateCreditTypeById(id, updateData);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
      return this._creditTypeService.deleteById(id);
    }
  }
  