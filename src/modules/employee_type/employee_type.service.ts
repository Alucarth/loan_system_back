import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';

import { EmployeeType } from './employee_type.entity';
import {
  CreateEmployeeTypeDto,
  UpdateEmployeeTypeDto,
} from './employee_type.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeTypeService {
  constructor(
    @InjectRepository(EmployeeType)
    private employeeTypeRepository: Repository<EmployeeType>,
  ) {}

  async findAll(): Promise<EmployeeType[]> {
    return this.employeeTypeRepository.find();
  }

  create(
    personType_dto: CreateEmployeeTypeDto,
  ): Promise<CreateEmployeeTypeDto> {
    return this.employeeTypeRepository.save(personType_dto);
  }

  findPersonTypeById(id: number) {
    return this.employeeTypeRepository.findOneBy({ id: id });
  }

  async updateById(
    id: number,
    updateData: UpdateEmployeeTypeDto,
  ): Promise<EmployeeType> {
    const employee_type = await this.employeeTypeRepository.findOneBy({
      id: id,
    });
    if (!employee_type) {
      throw new NotFoundException('Employee Type not found');
    }
    const updatedEmployeeType = Object.assign(employee_type, updateData);
    return this.employeeTypeRepository.save(updatedEmployeeType);
  }

  async updateEmployeeTypeById(
    id: number,
    updateData: Partial<UpdateEmployeeTypeDto>,
  ): Promise<EmployeeType> {
    const employeeType = await this.employeeTypeRepository.findOneBy({
      id: id,
    });
    if (!employeeType) {
      throw new NotFoundException('Employee Type not found');
    }
    const updatedEmployeeType = Object.assign(employeeType, updateData);
    return this.employeeTypeRepository.save(updatedEmployeeType);
  }

  async deleteById(id: number): Promise<void> {
    const employee_type = await this.employeeTypeRepository.findOneBy({
      id: id,
    });
    if (!employee_type) {
      throw new NotFoundException('Employee Type not found!');
    }
    await this.employeeTypeRepository.delete(id);
  }
}
