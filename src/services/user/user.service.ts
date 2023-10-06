import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/modules/user/user.entity';
import { CreateUserDto, UpdateUserDto } from 'src/controllers/user/user.dto';
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
                persons: {
                    account:true
                }
            },
            where:{username: username}
        })
    }

    async create(user_dto: CreateUserDto): Promise<User> {
        // Buscar entidades relacionadas
        const persons: Person[] = await this.personRepository.find({ where: { id: user_dto.person_id } });
        
        // Crear una nueva entidad User y rellenar sus propiedades
        const user = new User();
        
        user.username = user_dto.username;
        user.password = user_dto.password;
        user.persons = persons;
        
        // Save the new User entity to the database
        return await this.userRepository.save(user);
    }      

    findUserById(id:number)
    {
        return this.userRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOneBy({id:id});
        if (!user) {
            throw new NotFoundException('user not found');
        }
        const updatedUser = Object.assign(user, updateData);
        return this.userRepository.save(updatedUser);
    }
    
    async updateUserById(id: number, updateData: Partial<UpdateUserDto>): Promise<User> {
        const user = await this.userRepository.findOneBy({id:id});
        if (!user) {
            throw new NotFoundException('user not found');
        }
        const updatedUser = Object.assign(user, updateData);
        return this.userRepository.save(updatedUser);
    }

    async deleteById(id: number): Promise<void> {
        const user = await this.userRepository.findOneBy({id:id});
        if (!user) {
          throw new NotFoundException('user not found!');
        }
        await this.userRepository.delete(id);
    }
}
