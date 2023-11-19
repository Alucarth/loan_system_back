import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeSeeder } from './employee.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { Person } from '../person/person.entity';
import { EmployeeType } from '../employee_type/employee_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, Account, User, Person, EmployeeType]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeSeeder],
})
export class EmployeeModule {}
