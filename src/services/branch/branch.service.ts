import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Branch } from 'src/modules/branch/branch.entity';
import { CreateBranchDto, UpdateBranchDto } from 'src/controllers/branch/branch.dto';

@Injectable()
export class BranchService {
    constructor(
        @Inject('BRANCH_REPOSITORY')
        private branchRepository: Repository<Branch>
    ){}

    async findAll(): Promise<Branch[]>{
        return this.branchRepository.find();
    }

    create(branch_dto: CreateBranchDto): Promise<CreateBranchDto> 
    {
        return this.branchRepository.save(branch_dto);
    }

    findBranchById(id:number){
        return this.branchRepository.findOneBy({id:id});
    }
    async updateById(id: number, updateData: UpdateBranchDto): Promise<Branch> {
        const branch = await this.branchRepository.findOneBy({id:id});
        if (!branch) {
            throw new NotFoundException('Branch not found');
        }
        const updatedBranch = Object.assign(branch, updateData);
        return this.branchRepository.save(updatedBranch);
    }
    
    async updateBranchById(id: number, updateData: Partial<UpdateBranchDto>): Promise<Branch> {
        const branch = await this.branchRepository.findOneBy({id:id});
        if (!branch) {
            throw new NotFoundException('Branch not found');
        }
        const updatedBranch = Object.assign(branch, updateData);
        return this.branchRepository.save(updatedBranch);
    }

    async deleteById(id: number): Promise<void> {
        const branch = await this.branchRepository.findOneBy({id:id});
        if (!branch) {
          throw new NotFoundException('Branch not found!');
        }
        await this.branchRepository.delete(id);
    }
}
