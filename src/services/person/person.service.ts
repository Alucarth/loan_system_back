import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from 'src/modules/person/person.entity';
import { CreatePersonDto } from 'src/controllers/person/create-person.dto';
import { City } from 'src/modules/city/city.entity';
import { Account } from 'src/modules/account/account.entity';
import { PersonType } from 'src/modules/person_type/person_type.entity';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        @Inject('CITY_REPOSITORY')
        private cityRepository: Repository<City>,
        @Inject('ACCOUNT_REPOSITORY')
        private accountRepository: Repository<Account>,
        @Inject('PERSON_TYPE_REPOSITORY')
        private personTypeRepository: Repository<PersonType>

    ){}

    async findAll(): Promise<Person[]>{
        return this.personRepository.find();
    }

    async create(person_dto: CreatePersonDto): Promise<Person>{
        
        const city_card: City = await this.cityRepository.findOneBy({id: person_dto.identity_card_city.id}) 
        const city: City = await this.cityRepository.findOneBy({id: person_dto.city.id})
        const account: Account = await this.accountRepository.findOneBy({id: person_dto.account_id})
        const person_type = await this.personTypeRepository.findOneBy({id: person_dto.person_type.id})

        const person = new Person();
        person.names = person_dto.names;
        person.father_last_name = person_dto.father_last_name;
        person.mother_last_name = person_dto.mother_last_name;
        person.city_card = city_card;
        person.city = city;
        person.account = account;
        person.person_type = person_type;
    
        return this.personRepository.save(person)
    }

    findPersonById(id:number)
    {
        return this.personRepository.findOneBy({id:id})
    }
}
