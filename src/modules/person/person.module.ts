import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/person/person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { personProviders } from 'src/services/person/person.providers';
import { PersonService } from 'src/services/person/person.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PersonController],
    providers: [
        ...personProviders,
        PersonService
    ]
})
export class PersonModule {}
