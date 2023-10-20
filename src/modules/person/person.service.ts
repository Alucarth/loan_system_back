import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from 'src/modules/person/person.entity';
import { CreatePersonDto } from './create-person.dto';
import { UpdatePersonDto } from './update-person.dto';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personRepository.find({
      relations: ['account'],
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

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = new Person();
    Object.assign(person, createPersonDto);
    return await this.personRepository.save(person);
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const person = await this.personRepository.findOne({where: { id: id }});
    if (!person) {
      throw new NotFoundException('Person not found');
    }
    Object.assign(person, updatePersonDto);
    return await this.personRepository.save(person);
  }

  async findPersonById(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({
      where: { id: id },
      relations: ['account'],
    });
    if (!person) {
      throw new NotFoundException('Person not found');
    }
    return person;
  }

  async updateById(id: number, updateData: UpdatePersonDto): Promise<Person> {
    const person = await this.personRepository.findOne({where: { id: id }});
    if (!person) {
      throw new NotFoundException('Person not found');
    }
    Object.assign(person, updateData);
    return this.personRepository.save(person);
  }

  async updatePersonById(
    id: number,
    updateData: Partial<UpdatePersonDto>,
  ): Promise<Person> {
    const person = await this.personRepository.findOne({where: { id: id }});
    if (!person) {
      throw new NotFoundException('Person not found');
    }
    Object.assign(person, updateData);
    return this.personRepository.save(person);
  }

  async deleteById(id: number): Promise<void> {
    const person = await this.personRepository.findOne({where: { id: id }});
    if (!person) {
      throw new NotFoundException('Person not found!');
    }
    await this.personRepository.delete(id);
  }
}
