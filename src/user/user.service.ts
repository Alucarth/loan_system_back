import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import { Person } from 'src/modules/person/person.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find({ relations: ['person'] });
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

    async create(user_dto: CreateUserDto): Promise<User>{
        
        // Buscar entidades relacionadas
        const person: Person = await this.personRepository.findOneBy({id: user_dto.person_id})

        // Crear una nueva entidad Address y rellenar sus propiedades
        const user = new User();

        user.username = user_dto.username;
        user.password = user_dto.password
        user.person = person;
            
        // Save the new Address entity to the database
        return await this.userRepository.save(user)
    }

}
