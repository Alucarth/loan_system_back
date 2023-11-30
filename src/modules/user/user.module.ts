import { Module } from '@nestjs/common';
import { UserSeeder } from './user.seeder';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Person } from '../person/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Person])],
  controllers: [UserController],
  providers: [UserService, UserSeeder],
  exports: [UserService],
})
export class UserModule {}
