import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { BranchSeeder } from './branch.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../account/account.entity';
import { Branch } from './branch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, Branch])],
  controllers: [BranchController],
  providers: [BranchService, BranchSeeder], //se esta quitando los seedders por que se requiere adicionar triggers y en nest no esta disponible todabia esta funcionalidad
})
export class BranchModule {}
