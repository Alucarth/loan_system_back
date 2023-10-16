import { DataSource } from 'typeorm';
import { EmployeeType } from './employee_type.entity';

export const employeeTypeProviders = [
  {
    provide: 'EMPLOYEE_TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EmployeeType),
    inject: ['DATA_SOURCE'],
  },
];
