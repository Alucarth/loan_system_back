import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { UserSeeder } from './user.seeder';
import { personProviders } from 'src/modules/person/person.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, ...personProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
