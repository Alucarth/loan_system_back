import { Module } from '@nestjs/common';
import { GuarantyTypeService } from './guaranty_type.service';
import { GuarantyTypeController } from './guaranty_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuarantyType } from './guaranty_type.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuarantyType, User])],
  controllers: [GuarantyTypeController],
  providers: [
    GuarantyTypeService,
    // GuarantyTypeSeeder,
  ],
})
export class GuarantyTypeModule {}
