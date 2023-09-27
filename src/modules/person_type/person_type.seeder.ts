import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PersonTypeService } from './person_type.service';
import { PersonType } from './person_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonTypeSeeder implements OnModuleInit {
  constructor(
    private readonly _personTypeService: PersonTypeService,
    @Inject('PERSON_TYPE_REPOSITORY')
    private personTypeRepository: Repository<PersonType>,
  ) {}

  async onModuleInit() {
    const exist = await this.personTypeRepository.find();
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

    for (const data of personTypeData) {
      const person_type = new PersonType();
      person_type.name = data.name;
      person_type.state = data.state;

      await this._personTypeService.create(person_type);
    }
  }
}
