import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalReference } from './personal_reference.entity';
import { Account } from '../account/account.entity';
import { PersonalReferenceSeeder } from './personal_reference.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalReference, Account])],
  providers: [PersonalReferenceSeeder],
})
export class PersonalReferenceModule {}
