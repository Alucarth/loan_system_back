import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from 'src/modules/person/person.entity';
import { CreatePersonDto } from 'src/controllers/person/create-person.dto';
import { UpdatePersonDto } from 'src/controllers/person/update-person.dto';
import { City } from 'src/modules/city/city.entity';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        @Inject('CITY_REPOSITORY')
        private cityRepository: Repository<City>
    ){}

    async findAll(): Promise<Person[]>{
        return this.personRepository.find();
    }

    async create(person_dto: CreatePersonDto): Promise<Person>{
        
        const city_card: City = await this.cityRepository.findOneBy({id: person_dto.identity_card_city_id}) 


        const person = new Person();
        person.names = person_dto.names;
        person.father_last_name = person_dto.father_last_name;
        person.mother_last_name = person_dto.mother_last_name;
        person.city_card = city_card
        return this.personRepository.save(person)
    }

    findPersonById(id:number)
    {
        return this.personRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdatePersonDto): Promise<Person> {
        const person = await this.personRepository.findOneBy({id:id});
        if (!person) {
            throw new NotFoundException('Person not found');
        }
        const updatedPerson = Object.assign(person, updateData);
        return this.personRepository.save(updatedPerson);
    }
    
    async updatePersonById(id: number, updateData: Partial<UpdatePersonDto>): Promise<Person> {
        const person = await this.personRepository.findOneBy({id:id});
        if (!person) {
            throw new NotFoundException('Person not found');
        }
        const updatedPerson = Object.assign(person, updateData);
        return this.personRepository.save(updatedPerson);
    }

    async deleteById(id: number): Promise<void> {
        const person = await this.personRepository.findOneBy({id:id});
        if (!person) {
          throw new NotFoundException('Person not found!');
        }
        await this.personRepository.delete(id);
    }
}
