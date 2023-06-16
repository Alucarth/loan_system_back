import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from 'src/modules/person/person.entity';
import { CreatePersonDto } from 'src/controllers/person/create-person.dto';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>
    ){}

    async findAll(): Promise<Person[]>{
        return this.personRepository.find();
    }

    create(person: CreatePersonDto): Promise<CreatePersonDto>{
        return this.personRepository.save(person)
    }

    findPersonById(id:number)
    {
        return this.personRepository.findOneBy({id:id})
    }
}
