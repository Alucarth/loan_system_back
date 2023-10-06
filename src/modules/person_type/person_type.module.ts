import { Module } from '@nestjs/common';
import { PersonTypeController } from './person_type.controller';
import { DatabaseModule } from 'src/database/database.module';
import { personTypeProviders } from './person_type.providers';
import { PersonTypeService } from './person_type.service';
import { PersonTypeSeeder } from './person_type.seeder';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonTypeController],
  providers: [...personTypeProviders, PersonTypeService],
})
export class PersonTypeModule {}
