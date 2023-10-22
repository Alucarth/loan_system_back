import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
}
