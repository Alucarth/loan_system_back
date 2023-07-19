import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    findOne(username: string): Promise<any> {
        return this.userRepository.findOne({
            relations:{
                person: {
                    account:true
                }
            },
            where:{username: username}
        })
    }
}
