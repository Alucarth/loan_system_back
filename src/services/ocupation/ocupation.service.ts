import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOcupationDto, UpdateOcupationDto } from 'src/controllers/ocupation/ocupation.dto';
import { Ocupation } from 'src/modules/ocupation/ocupation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OcupationService {
    constructor(
        @Inject('OCUPATION_REPOSITORY')
        private ocupationRepository: Repository<Ocupation>

    ){}
    
    async findAll(): Promise<Ocupation[]>{
        return this.ocupationRepository.find();
    }

    create(ocupation_dto: CreateOcupationDto): Promise<CreateOcupationDto> 
    {
        return this.ocupationRepository.save(ocupation_dto);
    }

    findOcupationById(id:number)
    {
        return this.ocupationRepository.findOneBy({id:id})
    }

    async updateById(id: number, updateData: UpdateOcupationDto): Promise<Ocupation> {
        const ocupation = await this.ocupationRepository.findOneBy({id:id});
        if (!ocupation) {
            throw new NotFoundException('Ocupation Type not found');
        }
        const updatedOcupation = Object.assign(ocupation, updateData);
        return this.ocupationRepository.save(updatedOcupation);
    }
    
    async updateOcupationById(id: number, updateData: Partial<UpdateOcupationDto>): Promise<Ocupation> {
        const ocupation = await this.ocupationRepository.findOneBy({id:id});
        if (!ocupation) {
            throw new NotFoundException('Ocupation Type not found');
        }
        const updatedOcupation = Object.assign(ocupation, updateData);
        return this.ocupationRepository.save(updatedOcupation);
    }

    async deleteById(id: number): Promise<void> {
        const ocupation = await this.ocupationRepository.findOneBy({id:id});
        if (!ocupation) {
          throw new NotFoundException('Ocupation Type not found!');
        }
        await this.ocupationRepository.delete(id);
    }
}
