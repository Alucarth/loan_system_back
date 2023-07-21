import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from 'src/modules/person/person.entity';
import { CreatePersonDto } from 'src/controllers/person/create-person.dto';
import { UpdatePersonDto } from 'src/controllers/person/update-person.dto';
import { City } from 'src/modules/city/city.entity';
import { Account } from 'src/modules/account/account.entity';
import { PersonType } from 'src/modules/person_type/person_type.entity';
import { Country } from 'src/modules/country/country.entity';

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
        private personTypeRepository: Repository<PersonType>,
        @Inject('COUNTRY_REPOSITORY')
        private countryRepository: Repository<Country>

    ){}

    async findAll(): Promise<Person[]>{
        return this.personRepository.find({ relations: ['city','country','account','person_type'] });
    }

    async findAllClients(): Promise<Person[]>{
        console.log('get clients')
        return await this.personRepository.find({
            relations:{
                person_type: true
            },
            where:{
                person_type:{
                    name: 'cliente'
                }
            }
        })
    }

    /*async create(person_dto: CreatePersonDto): Promise<Person>{
        
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
        
        return await this.personRepository.save(person)
    }*/

    async create(person_dto: CreatePersonDto): Promise<Person>{
        
        // Buscar entidades relacionadas
        // if(person_dto.identity_card_city.id)
        const city_card: City = await this.cityRepository.findOneBy({id: person_dto.identity_card_city_id}) 
        const city: City = await this.cityRepository.findOneBy({id: person_dto.city_id})
        const account: Account = await this.accountRepository.findOneBy({id: person_dto.account_id})
        const person_type: PersonType = await this.personTypeRepository.findOneBy({id: person_dto.person_type_id})
        const country: Country = await this.countryRepository.findOneBy({id: person_dto.country_id})
    
        // Crear una nueva entidad Persona y rellenar sus propiedades
        const person = new Person();
        person.names = person_dto.names;
        person.father_last_name = person_dto.father_last_name;
        person.mother_last_name = person_dto.mother_last_name;
    
        // Establecer relaciones entre entidades
        person.city_card = city_card; 
        
        // valores no obligatorio
        person.gender = person_dto.gender ?? null
        person.photo_url = person_dto.photo_url ?? null
        person.material_status = person_dto.material_status ?? null
        person.dependents = person_dto.dependents ?? null
        person.personal_number = person_dto.personal_number ?? null
        person.email = person_dto.email ?? null
        person.birth_date = person_dto.birth_date ?? null
        person.age = person_dto.age ?? null
        person.person_id = person_dto.person_id ?? null

        person.city = city ?? null; 
        person.country = country ?? null;
       
        person.account = account; 
        person.person_type = person_type;
            
        // Save the new Person entity to the database
        return await this.personRepository.save(person)
    }
    

    findPersonById(id:number)
    {
        return this.personRepository.findOne({ where: { id:id }, relations: ['city','country','account','person_type'] })
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
