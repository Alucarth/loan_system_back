import { Module } from '@nestjs/common';
import { EmployeeTypeController } from './employee_type.controller';
import { DatabaseModule } from 'src/database/database.module';

import { employeeTypeProviders } from './employee_type.providers';
import { EmployeeTypeService } from './employee_type.service';
import { EmployeeTypeSeeder } from './employee_type.seeder';
import { accountProviders } from '../account/account.providers';
import { userProviders } from '../user/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeTypeController],
  providers: [
    ...employeeTypeProviders,
    ...accountProviders,
    ...userProviders,
    EmployeeTypeService,
    EmployeeTypeSeeder,
  ],
})
export class EmployeeTypeModule {}
