import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Branch } from 'src/modules/branch/branch.entity';
import { CreateBranchDto, UpdateBranchDto } from './branch.dto';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchRepository: Repository<Branch>,
  ) {}

  async findAll(request: RequestUserDto): Promise<Branch[]> {
    return this.branchRepository.find({
      where: { account_id: request.account_id },
    });
  }

  async create(
    branch_dto: CreateBranchDto,
    user: RequestUserDto,
  ): Promise<CreateBranchDto> {
    branch_dto.account_id = user.account_id;
    branch_dto.user_id = user.user_id;
    return await this.branchRepository.save(branch_dto);
  }

  async findBranchById(id: number, user: RequestUserDto) {
    return await this.branchRepository.findOneBy({
      public_id: id,
      account_id: user.account_id,
    });
  }

  async updateById(
    id: number,
    updateData: UpdateBranchDto,
    user: RequestUserDto,
  ): Promise<Branch> {
    const branch = await this.branchRepository.findOneBy({
      public_id: id,
      account_id: user.account_id,
    });
    if (!branch) {
      throw new NotFoundException('Branch not found');
    }
    updateData.user_id = user.user_id;
    const updatedBranch = Object.assign(branch, updateData);
    return this.branchRepository.save(updatedBranch);
  }

  // async updateBranchById(
  //   id: number,
  //   updateData: Partial<UpdateBranchDto>,
  //   user: RequestUserDto,
  // ): Promise<Branch> {
  //   const branch = await this.branchRepository.findOneBy({ id: id });
  //   if (!branch) {
  //     throw new NotFoundException('Branch not found');
  //   }
  //   updateData.account_id = user.account_id;
  //   updateData.user_id = user.user_id;
  //   const updatedBranch = Object.assign(branch, updateData);
  //   return this.branchRepository.save(updatedBranch);
  // }

  async deleteById(id: number, user: RequestUserDto): Promise<void> {
    const branch = await this.branchRepository.findOne({
      where: { public_id: id, account_id: user.account_id },
    });
    if (!branch) {
      throw new NotFoundException('Branch not found!');
    }
    await this.branchRepository.delete(id);
  }
}
