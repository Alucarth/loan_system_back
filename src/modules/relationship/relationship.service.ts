import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Relationship } from './relationship.entity';
import { CreateRelationshipDTO } from './relationship.dto';

@Injectable()
export class RelationshipService {
  constructor(
    @InjectRepository(Relationship)
    private relationshipRepository: Repository<Relationship>,
  ) {}

  async findAll(request: RequestUserDto): Promise<Relationship[]> {
    return this.relationshipRepository.find({
      where: { account_id: request.account_id },
    });
  }

  async create(relationship: CreateRelationshipDTO, request: RequestUserDto) {
    console.log('service', relationship);
    relationship.account_id = request.account_id;
    relationship.public_id = 0;
    relationship.user_id = request.user_id;
    return await this.relationshipRepository.save(relationship);
  }
}
