import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { branchProviders } from './branch.providers';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { BranchSeeder } from './branch.seeder';

@Module({
  imports: [DatabaseModule],
  controllers: [BranchController],
  providers: [...branchProviders, BranchService], //se esta quitando los seedders por que se requiere adicionar triggers y en nest no esta disponible todabia esta funcionalidad
})
export class BranchModule {}
