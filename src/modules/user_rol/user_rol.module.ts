import { Module } from '@nestjs/common';
import { UserRolController } from 'src/controllers/user_rol/user_rol.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserRolService } from 'src/services/user_rol/user_rol.service';
import { userRolProviders } from 'src/services/user_rol/user_rol.providers';
import { rolProviders } from '../rol/rol.providers';
import { userProviders } from 'src/services/user/user.providers';
import { UserRolSeeder } from './user_rol.seeder';

@Module({
    imports: [DatabaseModule],
    controllers: [UserRolController],
    providers: [
        ...userRolProviders,
        ...rolProviders,
        ...userProviders,
        UserRolService,
        UserRolSeeder
    ]
})

export class UserRolModule {} 