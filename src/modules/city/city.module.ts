import { Module } from '@nestjs/common';
import { CityController } from 'src/controllers/city/city.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cityProviders } from 'src/services/city/city.providers';
import { CityService } from 'src/services/city/city.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CityController],
    providers: [
        ...cityProviders,
        CityService
    ]
})
export class CityModule {}
