import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreditType } from './credit_type.entity';
import { CreateCreditTypeDto, UpdateCreditTypeDto } from './credit_type.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreditTypeService {
  constructor(
    @InjectRepository(CreditType)
    private creditTypeRepository: Repository<CreditType>,
  ) {}

  async findAll(): Promise<CreditType[]> {
    return this.creditTypeRepository.find({ relations: ['user'] });
  }

  create(creditType_dto: CreateCreditTypeDto): Promise<CreditType> {
    return this.creditTypeRepository.save(creditType_dto);
  }

  async findCreditTypeById(id: number) {
    return this.creditTypeRepository.find({
      where: { id: id },
      relations: ['user'],
    });
  }

  async updateById(
    id: number,
    updateData: UpdateCreditTypeDto,
  ): Promise<CreditType> {
    const creditType = await this.creditTypeRepository.findOneBy({ id: id });
    if (!creditType) {
      throw new NotFoundException('Credit Type not found');
    }
    const updatedCreditType = Object.assign(creditType, updateData);
    return this.creditTypeRepository.save(updatedCreditType);
  }

  async updateCreditTypeById(
    id: number,
    updateData: Partial<UpdateCreditTypeDto>,
  ): Promise<CreditType> {
    const creditType = await this.creditTypeRepository.findOneBy({ id: id });
    if (!creditType) {
      throw new NotFoundException('Credit Type not found');
    }
    const updatedCreditType = Object.assign(creditType, updateData);
    return this.creditTypeRepository.save(updatedCreditType);
  }

  async deleteById(id: number): Promise<void> {
    const creditType = await this.creditTypeRepository.findOneBy({ id: id });
    if (!creditType) {
      throw new NotFoundException('Credit Type not found!');
    }
    await this.creditTypeRepository.delete(id);
  }
}
