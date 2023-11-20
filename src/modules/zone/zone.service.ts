import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Zone } from './zone.entity';
import { RequestUserDto } from '../user/user.dto';
import { ZoneDto } from './zone.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(Zone)
    private zoneRepository: Repository<Zone>,
  ) {}

  async findAll(request: RequestUserDto): Promise<Zone[]> {
    return this.zoneRepository.find({
      where: { account_id: request.account_id },
    });
  }

  async create(zoneDto: ZoneDto, request: RequestUserDto) {
    zoneDto.account_id = request.account_id;
    zoneDto.public_id = 0;
    zoneDto.user_id = request.user_id;
    return await this.zoneRepository.save(zoneDto);
  }
}
