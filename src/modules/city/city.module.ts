import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity';
import { CitySeeder } from './city.seeder';
import { CityService } from './city.service';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [CitySeeder, CityService],
})
export class CityModule {}
