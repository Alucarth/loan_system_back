import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

import { Repository } from 'typeorm';
import { EmployeeTypeService } from './employee_type.service';
import { EmployeeType } from './employee_type.entity';

@Injectable()
export class EmployeeTypeSeeder implements OnModuleInit {
  constructor(
    private readonly _employeeTypeService: EmployeeTypeService,
    @Inject('PERSON_TYPE_REPOSITORY')
    private employeeTypeRepository: Repository<EmployeeType>,
  ) {}

  async onModuleInit() {
    const exist = await this.employeeTypeRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Person_Type). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Person_Type). Cargando registros en la base de datos.',
    );
    const personTypeData = [
      { name: 'Estudiante', state: true },
      { name: 'Maestro', state: true },
      { name: 'Ingeniero', state: true },
      { name: 'Doctor', state: true },
      { name: 'Artista', state: true },
    ];
    //TareaDIla: revisar por que no funciona
    // for (const data of personTypeData) {
    //   const person_type = new PersonType();
    //   person_type.name = data.name;
    //   person_type.state = data.state;

    //   await this._employeeTypeService.create(person_type);
    // }
  }
}
