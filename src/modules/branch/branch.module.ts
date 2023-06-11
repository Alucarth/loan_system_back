import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { branchProviders } from 'src/services/branch/branch.providers';
import { BranchService } from 'src/services/branch/branch.service';
import { BranchController } from 'src/controllers/branch/branch.controller'; 

@Module({
    imports: [ DatabaseModule],
    controllers: [BranchController],
    providers: [
        ...branchProviders,
        BranchService
    ]
})
export class BranchModule {}
