import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRolDto, UpdateRolDto } from './rol.dto';
import { Rol } from 'src/modules/rol/rol.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  async findAll(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  create(rol_dto: CreateRolDto): Promise<CreateRolDto> {
    return this.rolRepository.save(rol_dto);
  }

  findRolById(id: number) {
    return this.rolRepository.findOneBy({ id: id });
  }

  async updateById(id: number, updateData: UpdateRolDto): Promise<Rol> {
    const rol = await this.rolRepository.findOneBy({ id: id });
    if (!rol) {
      throw new NotFoundException('rol not found');
    }
    const updatedRol = Object.assign(rol, updateData);
    return this.rolRepository.save(updatedRol);
  }

  async updateRolById(
    id: number,
    updateData: Partial<UpdateRolDto>,
  ): Promise<Rol> {
    const rol = await this.rolRepository.findOneBy({ id: id });
    if (!rol) {
      throw new NotFoundException('rol not found');
    }
    const updatedRol = Object.assign(rol, updateData);
    return this.rolRepository.save(updatedRol);
  }

  async deleteById(id: number): Promise<void> {
    const rol = await this.rolRepository.findOneBy({ id: id });
    if (!rol) {
      throw new NotFoundException('rol not found!');
    }
    await this.rolRepository.delete(id);
  }
}
