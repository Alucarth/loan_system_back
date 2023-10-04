import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CountrySeeder } from './country.seeder';
import { countryProviders } from './country.providers';
import { CountryService } from './country.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CountryController],
  providers: [...countryProviders, CountryService, CountrySeeder],
})
export class CountryModule {}
