import { Module } from '@nestjs/common';
import { CountryController } from 'src/controllers/country/country.controller';
import { DatabaseModule } from 'src/database/database.module';
import { countryProviders } from 'src/services/country/country.providers';
import { CountryService } from 'src/services/country/country.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CountryController],
    providers: [
        ...countryProviders,
        CountryService
    ]
})
export class CountryModule {}
