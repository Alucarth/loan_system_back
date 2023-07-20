import { Module } from '@nestjs/common';
import { PersonTypeController } from 'src/controllers/person_type/person_type.controller';
import { DatabaseModule } from 'src/database/database.module';
import { personTypeProviders } from 'src/services/person_type/person_type.providers';
import { PersonTypeService } from 'src/services/person_type/person_type.service';
import { PersonTypeSeeder } from './person_type.seeder';

@Module({
    imports: [DatabaseModule],
    controllers: [PersonTypeController],
    providers: [
        ...personTypeProviders,
        PersonTypeService,
        // PersonTypeSeeder
    ]
})
export class PersonTypeModule {}
