import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { branchProviders } from './branch.providers';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { BranchSeeder } from './branch.seeder';

@Module({
  imports: [DatabaseModule],
  controllers: [BranchController],
  providers: [...branchProviders, BranchService, BranchSeeder],
})
export class BranchModule {}
