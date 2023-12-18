import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from 'src/modules/person/person.entity';
import { CreatePersonDto, UpdatePersonDto } from './create-person.dto';

import { City } from 'src/modules/city/city.entity';
import { Account } from 'src/modules/account/account.entity';
import { Country } from 'src/modules/country/country.entity';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(City)
    private cityRepository: Repository<City>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findByPublicId(public_id, user: RequestUserDto) {
    return await this.personRepository.findOneBy({
      public_id: public_id,
      account_id: user.account_id,
    });
  }

  // async findReferences(cliente_id: number): Promise<Person[]> {
  //   return await this.personRepository.find({
  //     relations: {
  //       person_type: true,
  //     },
  //     where: {
  //       person_id: cliente_id,
  //     },
  //   });
  // }

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

  async create(
    person_dto: CreatePersonDto,
    user: RequestUserDto,
  ): Promise<Person> {
    // Buscar entidades relacionadas

    // Crear una nueva entidad Persona y rellenar sus propiedades
    const person = new Person();
    person.names = person_dto.names;
    person.father_last_name = person_dto.father_last_name ?? null;
    person.mother_last_name = person_dto.mother_last_name ?? null;
    // person.identity_card = person_dto.identity_card ?? null;

    // valores no obligatorio
    person.identity_card = person_dto.identity_card ?? null;
    person.gender = person_dto.gender ?? null;
    person.infocenter = person_dto.infocenter;
    person.nick_name = person_dto.nick_name ?? null;
    person.husband_firstname = person_dto.husband_firstname ?? null;
    person.photo_url = person_dto.photo_url ?? null;
    person.civil_status = person_dto.civil_status ?? null;
    person.identity_card_city_id = person_dto.identity_card_city_id ?? null;
    person.infocenter = person_dto.infocenter ?? null;
    person.complement = person_dto.complement ?? null;
    person.birth_date = person_dto.birth_date ?? null;
    person.age = person_dto.age ?? null;
    person.account_id = user.account_id;
    person.user_id = user.user_id;
    person.public_id = 0;
    person.document_type = person_dto.document_type ?? null;
    person.photo_url = person_dto.photo_url ?? null;
    person.city_id = person_dto.city_id ?? null;

    // Save the new Person entity to the database
    return await this.personRepository.save(person);
  }

  findPersonById(id: number) {
    return this.personRepository.findOne({
      where: { id: id },
      relations: ['city', 'city_card', 'country', 'account', 'person_type'],
    });
  }

  async updateById(
    id: number,
    updateData: UpdatePersonDto,
    user: RequestUserDto,
  ): Promise<Person> {
    const person = await this.personRepository.findOneBy({
      public_id: id,
      account_id: user.account_id,
    });
    console.log('person', person);
    if (!person) {
      throw new NotFoundException('Person not found');
    }
    // const updatedPerson = Object.assign(person, updateData);`
    person.names = updateData.names;
    person.father_last_name = updateData.father_last_name;
    person.mother_last_name = updateData.mother_last_name;
    person.identity_card = updateData.identity_card;
    person.gender = updateData.gender;
    person.infocenter = updateData.infocenter;
    person.complement = updateData.complement;
    person.identity_card_city_id = updateData.identity_card_city_id;
    person.city_id = updateData.city_id;
    person.civil_status = updateData.civil_status;
    person.age = updateData.age;
    person.birth_date = updateData.birth_date;
    person.document_type_id = updateData.document_type_id;
    person.photo_url = updateData.photo_url ?? null;
    person.nick_name = updateData.nick_name ?? null;
    person.husband_firstname = updateData.husband_firstname ?? null;
    return this.personRepository.save(person);
  }

  async updatePersonById(
    id: number,
    updateData: Partial<UpdatePersonDto>,
  ): Promise<Person> {
    const person = await this.personRepository.findOne({ where: { id: id } });
    if (!person) {
      throw new NotFoundException('Person not found');
    }
    Object.assign(person, updateData);
    return this.personRepository.save(person);
  }

  async deleteById(id: number): Promise<void> {
    const person = await this.personRepository.findOne({ where: { id: id } });
    if (!person) {
      throw new NotFoundException('Person not found!');
    }
    await this.personRepository.delete(id);
  }
}
