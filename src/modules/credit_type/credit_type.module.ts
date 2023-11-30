import { Module } from '@nestjs/common';
import { CreditTypeService } from './credit_type.service';
import { CreditTypeController } from './credit_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditType } from './credit_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditType])],
  controllers: [CreditTypeController],
  providers: [CreditTypeService],
})
export class CreditTypeModule {}
