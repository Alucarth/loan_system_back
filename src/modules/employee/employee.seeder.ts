import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { Person } from '../person/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeType } from '../employee_type/employee_type.entity';

@Injectable()
export class EmployeeSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(EmployeeType)
    private employeeTypeRepository: Repository<EmployeeType>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async onModuleInit() {
    const exist = await this.employeeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Employee). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Employee). Cargando registros en la base de datos.',
    );
    await this.employeeRepository.query(
      'DROP TRIGGER IF EXISTS employee_public_id;',
    );
    await this.employeeRepository.query(
      'CREATE TRIGGER employee_public_id before INSERT  on employee for EACH ROW BEGIN  set new.public_id = (SELECT COALESCE (max(public_id),0) +1 from employee WHERE account_id = NEW.account_id);  END',
    );
    await new Promise((resolve) => setTimeout(resolve, 800)); //asumiendo que se creo el usuario
    const [accounts, users, persons, employee_types] = await Promise.all([
      this.accountRepository.find(),
      this.userRepository.find(),
      this.personRepository.find(),
      this.employeeTypeRepository.find(),
    ]);

    const employees = [
      {
        person: persons[0],
        employee_type: employee_types[0],
        account: accounts[0],
        user: users[0],
        public_id: 0,
      },
    ];

    for (const employee of employees) {
      this.employeeRepository.save(employee);
    }
  }
}
