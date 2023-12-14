import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from 'src/modules/account/account.entity';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountRepository.find();
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

  async softDeleteById(id: number): Promise<void> {
    const account = await this.accountRepository.findOneBy({ id: id });
    // uso de NotFoundException si account no existe
    if (!account) {
      throw new NotFoundException('Account not found!');
    }
    // actualiza el campo deleted_At en lugar de borrar el registro (softDelete)
    await this.accountRepository.update({ id }, { deleted_at: new Date() });
  }
  
}
