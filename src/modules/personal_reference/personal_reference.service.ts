import { Injectable } from '@nestjs/common';
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
}
