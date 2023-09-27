import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PersonType } from 'src/modules/person_type/person_type.entity';
import { Repository } from 'typeorm';
import { CreatePersonTypeDto, UpdatePersonTypeDto } from './person_type.dto';

@Injectable()
export class PersonTypeService {
  constructor(
    @Inject('PERSON_TYPE_REPOSITORY')
    private personTypeRepository: Repository<PersonType>,
  ) {}

  async findAll(): Promise<PersonType[]> {
    return this.personTypeRepository.find();
  }

  create(personType_dto: CreatePersonTypeDto): Promise<CreatePersonTypeDto> {
    return this.personTypeRepository.save(personType_dto);
  }

  findPersonTypeById(id: number) {
    return this.personTypeRepository.findOneBy({ id: id });
  }

  async updateById(
    id: number,
    updateData: UpdatePersonTypeDto,
  ): Promise<PersonType> {
    const personType = await this.personTypeRepository.findOneBy({ id: id });
    if (!personType) {
      throw new NotFoundException('Person Type not found');
    }
    const updatedPersonType = Object.assign(personType, updateData);
    return this.personTypeRepository.save(updatedPersonType);
  }

  async updatePersonTypeById(
    id: number,
    updateData: Partial<UpdatePersonTypeDto>,
  ): Promise<PersonType> {
    const personType = await this.personTypeRepository.findOneBy({ id: id });
    if (!personType) {
      throw new NotFoundException('Person Type not found');
    }
    const updatedPersonType = Object.assign(personType, updateData);
    return this.personTypeRepository.save(updatedPersonType);
  }

  async deleteById(id: number): Promise<void> {
    const personType = await this.personTypeRepository.findOneBy({ id: id });
    if (!personType) {
      throw new NotFoundException('Person Type not found!');
    }
    await this.personTypeRepository.delete(id);
  }
}
