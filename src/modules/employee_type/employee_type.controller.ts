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
import { EmployeeTypeService } from './employee_type.service';
import {
  CreateEmployeeTypeDto,
  UpdateEmployeeTypeDto,
} from './employee_type.dto';

@ApiTags('EmployeeType')
@Controller('employee_type')
export class EmployeeTypeController {
  constructor(private readonly _employeeTypeService: EmployeeTypeService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this._employeeTypeService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findPersonTypeById(@Param('id', ParseIntPipe) id: number) {
    return this._employeeTypeService.findPersonTypeById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() employeeTypeData: CreateEmployeeTypeDto) {
    console.log('employeeTypeData', employeeTypeData);
    const response = await this._employeeTypeService.create(employeeTypeData);
    return response;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateEmployeeTypeDto,
  ) {
    return this._employeeTypeService.updateById(id, updateData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updatePersonTypeById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UpdateEmployeeTypeDto>,
  ) {
    return this._employeeTypeService.updateEmployeeTypeById(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._employeeTypeService.deleteById(id);
  }
}
