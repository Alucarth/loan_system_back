import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(username: string): Promise<any> {
    return this.userRepository.findOne({
      relations: {
        person: {
          account: true,
        },
      },
      where: { username: username },
    });
  }

  findOneById(user_id: number): Promise<any> {
    return this.userRepository.findOne({
      relations: {
        person: {
          account: true,
        },
      },
      where: { id: user_id },
    });
  }

  async create(user_dto: User): Promise<User> {
    const saltOrRounds = 10;
    user_dto.password = await bcrypt.hash(user_dto.password, saltOrRounds);

    return await this.userRepository.save(user_dto);
  }
}
