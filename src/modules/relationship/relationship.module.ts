import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relationship } from './relationship.entity';
import { Account } from '../account/account.entity';
import { RelationshipSeeder } from './relationship.seeder';
import { RelationshipController } from './relationship.controller';
import { RelationshipService } from './relationship.service';

@Module({
  imports: [TypeOrmModule.forFeature([Relationship, Account])],
  controllers: [RelationshipController],
  providers: [RelationshipSeeder, RelationshipService],
})
export class RelationshipModule {}
