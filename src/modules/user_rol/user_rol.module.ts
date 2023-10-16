import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';

import { rolProviders } from '../rol/rol.providers';
import { UserRolSeeder } from './user_rol.seeder';
import { UserRolController } from './user_rol.controller';
import { userRolProviders } from './user_rol.providers';
import { userProviders } from '../user/user.providers';
import { UserRolService } from './user_rol.services';

@Module({
  imports: [DatabaseModule],
  controllers: [UserRolController],
  providers: [
    ...userRolProviders,
    ...rolProviders,
    ...userProviders,
    UserRolService,
    UserRolSeeder,
  ],
})
export class UserRolModule {}
