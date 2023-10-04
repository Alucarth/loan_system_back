import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from './account.providers';
import { AccountService } from './account.service';
import { AccountSeeder } from './account.seeder';
import { AccountController } from './account.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [...accountProviders, AccountService, AccountSeeder],
})
export class AccountModule {}
