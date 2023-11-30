import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyType } from './property_type.entity';
import { CreatePropertyDto } from './property_type.dto';

@Injectable()
export class PropertyTypeService {
  constructor(
    @InjectRepository(PropertyType)
    private propertyTypeRepository: Repository<PropertyType>,
  ) {}

  async findAll(request: RequestUserDto): Promise<PropertyType[]> {
    return this.propertyTypeRepository.find({
      where: { account_id: request.account_id },
    });
  }

  async create(propertyDto: CreatePropertyDto, request: RequestUserDto) {
    propertyDto.account_id = request.account_id;
    propertyDto.public_id = 0;
    propertyDto.user_id = request.user_id;
    return await this.propertyTypeRepository.save(propertyDto);
  }
}
