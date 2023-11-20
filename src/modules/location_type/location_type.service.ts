import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationType } from './location_type.entity';
import { CreateLocationDto } from './location_type.dto';

@Injectable()
export class LocationTypeService {
  constructor(
    @InjectRepository(LocationType)
    private locationTypeRepository: Repository<LocationType>,
  ) {}

  async findAll(request: RequestUserDto): Promise<LocationType[]> {
    return this.locationTypeRepository.find({
      where: { account_id: request.account_id },
    });
  }

  async create(locationDto: CreateLocationDto, request: RequestUserDto) {
    locationDto.account_id = request.account_id;
    locationDto.public_id = 0;
    locationDto.user_id = request.user_id;
    return await this.locationTypeRepository.save(locationDto);
  }
}
