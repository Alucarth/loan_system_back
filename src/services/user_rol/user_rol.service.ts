import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserRolDto, UpdateUserRolDto } from 'src/controllers/user_rol/user_rol.dto';
import { Rol } from 'src/modules/rol/rol.entity';
import { User } from 'src/modules/user/user.entity';
import { UserRol } from 'src/modules/user_rol/user_rol.entity';
import { Repository } from 'typeorm';

@Injectable()
 export class UserRolService{
    constructor(
        @Inject('USER_ROL_REPOSITORY')
        private userRolRepository: Repository<UserRol>,
        @Inject('ROL_REPOSITORY')
        private rolRepository: Repository<Rol>,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ){}

    async findAll(): Promise<UserRol[]>{
        return this.userRolRepository.find({ relations: ['rol','user'] })
    }

    async create(userRol_dto: CreateUserRolDto): Promise<UserRol>{
        
        // Buscar entidades relacionadas
        const rols: Rol = await this.rolRepository.findOneBy({id: userRol_dto.rol_id})
        const users: User = await this.userRepository.findOneBy({id: userRol_dto.user_id})

        // Crear una nueva entidad Address y rellenar sus propiedades
        const userRol = new UserRol();

        userRol.rol = rols;
        userRol.user = users;
            
        // Save the new Address entity to the database
        return await this.userRolRepository.save(userRol)
    }

    findUserRolById(id:number)
    {
        return this.userRolRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdateUserRolDto): Promise<UserRol> {
        const userRol = await this.userRolRepository.findOneBy({id:id});
        if (!userRol) {
            throw new NotFoundException('user rol not found');
        }
        const updatedUserRol = Object.assign(userRol, updateData);
        return this.userRolRepository.save(updatedUserRol);
    }
    
    async updateUserRolById(id: number, updateData: Partial<UpdateUserRolDto>): Promise<UserRol> {
        const userRol = await this.userRolRepository.findOneBy({id:id});
        if (!userRol) {
            throw new NotFoundException('user rol not found');
        }
        const updatedUserRol = Object.assign(userRol, updateData);
        return this.userRolRepository.save(updatedUserRol);
    }

    async deleteById(id: number): Promise<void> {
        const userRol = await this.userRolRepository.findOneBy({id:id});
        if (!userRol) {
          throw new NotFoundException('user rol not found!');
        }
        await this.userRolRepository.delete(id);
    }

 }