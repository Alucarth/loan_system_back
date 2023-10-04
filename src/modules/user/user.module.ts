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
<<<<<<< HEAD
  providers: [
    ...personProviders,
    ...userProviders,    
    UserService,
    UserSeeder
  ],
  exports: [UserService]
=======
  providers: [...userProviders, ...personProviders, UserService, UserSeeder],
  exports: [UserService],
>>>>>>> 590ead470683b44369ed726a211b4c484638bd80
})
export class UserModule {}
