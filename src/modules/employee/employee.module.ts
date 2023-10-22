import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EmployeeController } from './employee.controller';
import { employeeProviders } from './employee.providers';
import { EmployeeService } from './employee.service';
import { EmployeeSeeder } from './employee.seeder';
import { accountProviders } from '../account/account.providers';
import { userProviders } from '../user/user.providers';
import { personProviders } from '../person/person.providers';
import { employeeTypeProviders } from '../employee_type/employee_type.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [
    ...employeeProviders,
    ...accountProviders,
    ...userProviders,
    ...personProviders,
    ...employeeTypeProviders,
    EmployeeService,
    EmployeeSeeder,
  ],
})
export class EmployeeModule {}
