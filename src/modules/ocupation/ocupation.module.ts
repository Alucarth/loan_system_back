import { Module } from '@nestjs/common';
import { OcupationController } from './ocupation.controller';
import { OcupationService } from './ocupation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ocupation } from './ocupation.entity';
import { Address } from '../address/address.entity';
import { Account } from '../account/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ocupation, Address, Account])],
  controllers: [OcupationController],
  providers: [OcupationService],
})
export class OcupationModule {}
