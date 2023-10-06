import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from 'src/controllers/user/user.controller';
import { UserService } from 'src/services/user/user.service';
import { userProviders } from 'src/services/user/user.providers';
import { UserSeeder } from './user.seeder';
import { personProviders } from 'src/modules/person/person.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, ...personProviders, UserService, UserSeeder],
  exports: [UserService],
})
export class UserModule {}
