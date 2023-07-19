import { Injectable, OnModuleInit } from "@nestjs/common";
import { PersonTypeService } from "src/services/person_type/person_type.service";
import { PersonType } from "./person_type.entity";

  
@Injectable()
export class PersonTypeSeeder implements OnModuleInit {
    constructor(private readonly _personTypeService: PersonTypeService) {}

    async onModuleInit() {
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
  