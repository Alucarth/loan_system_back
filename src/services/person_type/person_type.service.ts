import { Inject, Injectable } from '@nestjs/common';
import { PersonType } from 'src/modules/person_type/person_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonTypeService {
    constructor(
        @Inject('PERSON_TYPE_REPOSITORY')
        private personTypeRepository: Repository<PersonType>

    ){}
    
    async findAll(): Promise<PersonType[]>{
        return this.personTypeRepository.find();
    }
}
