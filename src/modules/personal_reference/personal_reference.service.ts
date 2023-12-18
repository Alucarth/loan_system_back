import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { PersonalReference } from './personal_reference.entity';
import { CreatePersonalReferenceDTO } from './personal_reference.dto';

@Injectable()
export class PersonalReferenceService {
  constructor(
    @InjectRepository(PersonalReference)
    private PersonalReferenceRepository: Repository<PersonalReference>,
  ) {}

  async findAll(request: RequestUserDto): Promise<PersonalReference[]> {
    return this.PersonalReferenceRepository.find({
      where: { account_id: request.account_id },
    });
  }

  async findAllByClientId(
    client_public_id: number,
    user: RequestUserDto,
  ): Promise<PersonalReference[]> {
    return await this.PersonalReferenceRepository.find({
      where: {
        person: {
          public_id: client_public_id,
          account_id: user.account_id,
        },
      },
    });
  }

  async create(
    personal_reference: CreatePersonalReferenceDTO,
    request: RequestUserDto,
  ) {
    console.log('service', personal_reference);
    personal_reference.account_id = request.account_id;
    personal_reference.public_id = 0;
    personal_reference.user_id = request.user_id;
    return await this.PersonalReferenceRepository.save(personal_reference);
  }

  async updateById(
    public_id: number,
    updateData: CreatePersonalReferenceDTO,
    user: RequestUserDto,
  ): Promise<PersonalReference> {
    console.log('payload update reference', updateData);
    const reference = await this.PersonalReferenceRepository.findOneBy({
      account_id: user.account_id,
      public_id: public_id,
    });
    if (!reference) {
      throw new NotFoundException('reference not found!');
    }
    const updatedAddress = Object.assign(reference, updateData);
    return await this.PersonalReferenceRepository.save(updatedAddress);
  }

  async deleteById(public_id: number, user: RequestUserDto): Promise<void> {
    const reference = await this.PersonalReferenceRepository.findOneBy({
      public_id: public_id,
      account_id: user.account_id,
    });
    if (!reference) {
      throw new NotFoundException('reference not found!');
    }
    await this.PersonalReferenceRepository.delete(reference.id);
  }
}
