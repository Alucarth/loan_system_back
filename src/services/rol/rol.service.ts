import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRolDto } from 'src/controllers/rol/create-rol.dto';
import { UpdateRolDto } from 'src/controllers/rol/update-rol.dto';
import { Rol } from 'src/modules/rol/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
 export class RolService{
    constructor(
        @Inject('ROL_REPOSITORY')
        private rolRepository: Repository<Rol>
    ){}

    async findAll(): Promise<Rol[]>{
        return this.rolRepository.find()
    }
    
    create(rol_dto: CreateRolDto): Promise<CreateRolDto> 
    {
        return this.rolRepository.save(rol_dto);
    }

    findRolById(id:number)
    {
        return this.rolRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdateRolDto): Promise<Rol> {
        const rol = await this.rolRepository.findOneBy({id:id});
        if (!rol) {
            throw new NotFoundException('rol not found');
        }
        const updatedRol = Object.assign(rol, updateData);
        return this.rolRepository.save(updatedRol);
    }
    
    async updateRolById(id: number, updateData: Partial<UpdateRolDto>): Promise<Rol> {
        const rol = await this.rolRepository.findOneBy({id:id});
        if (!rol) {
            throw new NotFoundException('rol not found');
        }
        const updatedRol = Object.assign(rol, updateData);
        return this.rolRepository.save(updatedRol);
    }

    async deleteById(id: number): Promise<void> {
        const rol = await this.rolRepository.findOneBy({id:id});
        if (!rol) {
          throw new NotFoundException('rol not found!');
        }
        await this.rolRepository.delete(id);
    }

 }