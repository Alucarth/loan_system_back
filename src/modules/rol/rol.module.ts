import { Module } from '@nestjs/common';
import { RolController } from 'src/controllers/rol/rol.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RolService } from 'src/services/rol/rol.service';
import { rolProviders } from 'src/services/rol/rol.providers';
import { RolSeeder } from './rol.seeder';

@Module({
    imports: [DatabaseModule],
    controllers: [RolController],
    providers: [
        ...rolProviders,
        RolService,
        RolSeeder
    ]
})
export class RolModule {}
