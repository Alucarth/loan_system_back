import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cityProviders } from './city.providers';
import { CityService } from './city.service';
import { CitySeeder } from './city.seeder';

@Module({
  imports: [DatabaseModule],
  controllers: [CityController],
  providers: [...cityProviders, CityService, CitySeeder],
})
export class CityModule {}
