import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountSeeder } from './account.seeder';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [AccountService, AccountSeeder],
})
export class AccountModule {}
