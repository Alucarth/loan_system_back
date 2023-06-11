import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Branch } from 'src/modules/branch/branch.entity';

@Injectable()
export class BranchService {
    constructor(
        @Inject('BRANCH_REPOSITORY')
        private branchRepository: Repository<Branch>
    ){}

    async findAll(): Promise<Branch[]>{
        return this.branchRepository.find();
    }
}
