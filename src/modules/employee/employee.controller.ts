import { ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Employee } from './employee.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Employee')
@UseGuards(JwtAuthGuard)
@Controller('employee')
export class EmployeeController {
  constructor(private readonly _employeeService: EmployeeService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Employee[]> {
    return this._employeeService.findAll();
  }
}
