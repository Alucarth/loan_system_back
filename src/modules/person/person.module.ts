import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/person/person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from 'src/services/account/account.providers';
import { cityProviders } from 'src/services/city/city.providers';
import { CityService } from 'src/services/city/city.service';
import { personProviders } from 'src/services/person/person.providers';
import { PersonService } from 'src/services/person/person.service';
import { personTypeProviders } from 'src/services/person_type/person_type.providers';


@Module({
    imports: [DatabaseModule],
    controllers: [PersonController],
    providers: [
        ...personProviders,
        ...cityProviders,
        ...accountProviders,
        ...personTypeProviders,
        PersonService,
    ]
})
export class PersonModule {}
