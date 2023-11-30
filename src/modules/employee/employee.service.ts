import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
}
