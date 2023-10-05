import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GuarantyType } from './guaranty_type.entity';
import { CreateGuarantyTypeDto, UpdateGuarantyTypeDto } from './guaranty_type.dto';

@Injectable()
export class GuarantyTypeService {
  constructor(
    @Inject('GUARANTY_TYPE_REPOSITORY')
    private guarantyTypeRepository: Repository<GuarantyType>,
  ) {}

  async findAll(): Promise<GuarantyType[]> {
    return this.guarantyTypeRepository.find({ relations: ['user'] });
  }

  create(creditType_dto: CreateGuarantyTypeDto): Promise<GuarantyType> {
    return this.guarantyTypeRepository.save(creditType_dto);
  }

  async findGuarantyTypeById(id: number) {
    return this.guarantyTypeRepository.find({ where: { id:id }, relations: ['user'] });
  }

  async updateById(id: number, updateData: UpdateGuarantyTypeDto): Promise<GuarantyType> {
    const guarantyType = await this.guarantyTypeRepository.findOneBy({ id: id });
    if (!guarantyType) {
      throw new NotFoundException('Credit Type not found');
    }
    const updatedGuarantyType = Object.assign(guarantyType, updateData);
    return this.guarantyTypeRepository.save(updatedGuarantyType);
  }

  async updateGuarantyTypeById(id: number,updateData: Partial<UpdateGuarantyTypeDto>): Promise<GuarantyType> {
    const guarantyType = await this.guarantyTypeRepository.findOneBy({ id: id });
    if (!guarantyType) {
      throw new NotFoundException('Credit Type not found');
    }
    const updatedGuarantyType = Object.assign(guarantyType, updateData);
    return this.guarantyTypeRepository.save(updatedGuarantyType);
  }

  async deleteById(id: number): Promise<void> {
    const guarantyType = await this.guarantyTypeRepository.findOneBy({ id: id });
    if (!guarantyType) {
      throw new NotFoundException('Credit Type not found!');
    }
    await this.guarantyTypeRepository.delete(id);
  }
}
