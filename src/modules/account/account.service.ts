import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from 'src/modules/account/account.entity';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountRepository.find({ relations: ['branch'] });
  }

  create(account_dto: CreateAccountDto): Promise<CreateAccountDto> {
    return this.accountRepository.save(account_dto);
  }

  /*findAccountById(id:number){
        return this.accountRepository.findOneBy({id:id});
    }*/

  async findAccountById(id: number): Promise<Account> {
    return this.accountRepository.findOne({
      where: { id: id },
      relations: ['branch'],
    });
  }

  async updateById(id: number, updateData: UpdateAccountDto): Promise<Account> {
    const account = await this.accountRepository.findOneBy({ id: id });
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    const updatedAccount = Object.assign(account, updateData);
    return this.accountRepository.save(updatedAccount);
  }

  async updateAccountById(
    id: number,
    updateData: Partial<UpdateAccountDto>,
  ): Promise<Account> {
    const account = await this.accountRepository.findOneBy({ id: id });
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    const updatedAccount = Object.assign(account, updateData);
    return this.accountRepository.save(updatedAccount);
  }

  async deleteById(id: number): Promise<void> {
    const account = await this.accountRepository.findOneBy({ id: id });
    if (!account) {
      throw new NotFoundException('Account not found!');
    }
    await this.accountRepository.delete(id);
  }
}
