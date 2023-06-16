import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/person/person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cityProviders } from 'src/services/city/city.providers';
import { CityService } from 'src/services/city/city.service';
import { personProviders } from 'src/services/person/person.providers';
import { PersonService } from 'src/services/person/person.service';


@Module({
    imports: [DatabaseModule],
    controllers: [PersonController],
    providers: [
        ...personProviders,
        ...cityProviders,
        PersonService,
        CityService
    ]
})
export class PersonModule {}
