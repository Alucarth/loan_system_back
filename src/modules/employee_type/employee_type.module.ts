import { Module } from '@nestjs/common';
import { EmployeeTypeController } from './employee_type.controller';
import { DatabaseModule } from 'src/database/database.module';

import { employeeTypeProviders } from './employee_type.providers';
import { EmployeeTypeService } from './employee_type.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeTypeController],
  providers: [...employeeTypeProviders, EmployeeTypeService],
})
export class EmployeeTypeModule {}
