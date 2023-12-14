import { Module } from '@nestjs/common';
import { UserRolSeeder } from './user_rol.seeder';
import { UserRolController } from './user_rol.controller';
import { UserRolService } from './user_rol.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRol } from './user_rol.entity';
import { Rol } from '../rol/rol.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRol, Rol, User])],
  controllers: [UserRolController],
  providers: [UserRolService, /*UserRolSeeder*/],
})
export class UserRolModule {}
