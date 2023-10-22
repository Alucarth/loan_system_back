import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

import { Repository } from 'typeorm';
import { EmployeeTypeService } from './employee_type.service';
import { EmployeeType } from './employee_type.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';

@Injectable()
export class EmployeeTypeSeeder implements OnModuleInit {
  constructor(
    private readonly _employeeTypeService: EmployeeTypeService,
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('EMPLOYEE_TYPE_REPOSITORY')
    private employeeTypeRepository: Repository<EmployeeType>,
  ) {}

  async onModuleInit() {
    const exist = await this.employeeTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Emplyee_Type). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Emplyee_Type). Cargando registros en la base de datos.',
    );

    await this.employeeTypeRepository.query(
      'DROP TRIGGER IF EXISTS employee_type_public_id;',
    );
    await this.employeeTypeRepository.query(
      'CREATE TRIGGER employee_type_public_id before INSERT  on employee_type for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from employee_type WHERE account_id = NEW.account_id);  END',
    );

    await new Promise((resolve) => setTimeout(resolve, 600)); //asumiendo que se creo el usuario
    const [accounts, users] = await Promise.all([
      this.accountRepository.find(),
      this.userRepository.find(),
    ]);
    const employee_types = [
      {
        name: 'Administrado',
        account_id: accounts[0]?.id,
        public_id: 0,
        state: true,
        user_id: users[0]?.id,
      },
      {
        name: 'Oficial de Credito',
        account_id: accounts[0]?.id,
        public_id: 0,
        state: true,
        user_id: users[0]?.id,
      },
    ];

    for (const employee_type of employee_types) {
      this.employeeTypeRepository.save(employee_type);
    }
  }
}
