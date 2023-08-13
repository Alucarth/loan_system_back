import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { UserSeeder } from './user.seeder';
import { personProviders } from 'src/services/person/person.providers';


@Module({
  imports:[DatabaseModule],
  controllers: [UserController],
  providers: [
    ...userProviders,
    ...personProviders,
    UserService,
    UserSeeder
  ],
  exports: [UserService]
})
export class UserModule {}
