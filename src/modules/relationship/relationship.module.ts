import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relationship } from './relationship.entity';
import { Account } from '../account/account.entity';
import { RelationshipSeeder } from './relationship.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Relationship, Account])],
  providers: [RelationshipSeeder],
})
export class RelationshipModule {}
