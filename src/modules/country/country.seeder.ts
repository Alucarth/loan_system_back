import { Injectable, OnModuleInit } from "@nestjs/common";
import { Country } from "./country.entity";
import { CountryService } from "src/services/country/country.service";

@Injectable()
export class CountrySeeder implements OnModuleInit {
    constructor(private readonly countryService: CountryService) {}

    async onModuleInit() {
        const countriesData = [
            { name: 'Bolivia', short_name: 'BO' },
            { name: 'Argentina', short_name: 'AR' },
            { name: 'Brazil', short_name: 'BR' },
            { name: 'Canada', short_name: 'CA' },
            { name: 'China', short_name: 'CN' },
            { name: 'France', short_name: 'FR' },
            { name: 'Germany', short_name: 'DE' },
            { name: 'India', short_name: 'IN' },
            { name: 'Italy', short_name: 'IT' },
            { name: 'Japan', short_name: 'JP' },
          ];
    
        for (const data of countriesData) {
            const country = new Country();
            country.name = data.name;
            country.short_name = data.short_name;
    
            await this.countryService.create(country);
        }
    }
}
