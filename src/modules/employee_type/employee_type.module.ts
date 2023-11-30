import { Module } from '@nestjs/common';
import { EmployeeTypeController } from './employee_type.controller';
import { EmployeeTypeService } from './employee_type.service';
import { EmployeeTypeSeeder } from './employee_type.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employee/employee.entity';
import { EmployeeType } from './employee_type.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, EmployeeType, Account, User])],
  controllers: [EmployeeTypeController],
  providers: [EmployeeTypeService, EmployeeTypeSeeder],
})
export class EmployeeTypeModule {}
