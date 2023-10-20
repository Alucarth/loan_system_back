import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from '../account/account.providers';
import { personProviders } from './person.providers';
import { PersonService } from './person.service';
import { AddressService } from '../address/address.service';
import { PersonSeeder } from './person.seeder';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [
    ...personProviders,
    ...accountProviders,
    PersonService,
    PersonSeeder
  ],
})
export class PersonModule {}
