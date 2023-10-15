import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { creditTypeProviders } from './credit_type.providers';
import { userProviders } from '../user/user.providers';
import { CreditTypeService } from './credit_type.service';
import { CreditTypeSeeder } from './credit_type.seeder';
import { CreditTypeController } from './credit_type.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreditTypeController],
  providers: [...creditTypeProviders, ...userProviders, CreditTypeService],
})
export class CreditTypeModule {}
