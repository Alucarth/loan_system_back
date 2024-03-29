import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountrySeeder } from './country.seeder';
import { CountryService } from './country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountryController],
  providers: [CountryService, CountrySeeder],
})
export class CountryModule {}
