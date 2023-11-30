import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalReference } from './personal_reference.entity';
import { Account } from '../account/account.entity';
import { PersonalReferenceSeeder } from './personal_reference.seeder';
import { PersonalReferenceController } from './personal_reference.controller';
import { PersonalReferenceService } from './personal_reference.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalReference, Account])],
  controllers: [PersonalReferenceController],
  providers: [PersonalReferenceSeeder, PersonalReferenceService],
})
export class PersonalReferenceModule {}
