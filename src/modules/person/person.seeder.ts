import { Inject, Injectable, OnModuleInit} from "@nestjs/common";
import { Person } from "./person.entity";
import { City } from "../city/city.entity";
import { Country } from "../country/country.entity";
import { Account } from "../account/account.entity";
import { PersonType } from "../person_type/person_type.entity";
import { Repository } from "typeorm";
import { DependsOn } from "@nestjs/schedule";
import { CityService } from "src/services/city/city.service";
import { CountryService } from "src/services/country/country.service";
import { PersonTypeService } from "src/services/person_type/person_type.service";
import { AccountService } from "src/services/account/account.service";
import { PersonService } from "src/services/person/person.service";
  
@Injectable()
@DependsOn(
  CityService,
  CountryService,
  PersonTypeService,
  AccountService,
  PersonService,
)
export class PersonSeeder implements OnModuleInit {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        @Inject('CITY_REPOSITORY')
        private cityRepository: Repository<City>,
        @Inject('ACCOUNT_REPOSITORY')
        private accountRepository: Repository<Account>,
        @Inject('PERSON_TYPE_REPOSITORY')
        private personTypeRepository: Repository<PersonType>,
        @Inject('COUNTRY_REPOSITORY')
        private countryRepository: Repository<Country>

      ) {}

    async onModuleInit() {

    const exist = await this.personRepository.find();
    if (exist.length > 0) {
      console.log('Saltando proceso del seeder -> (Person). Ya existen registros en la base de datos.');
      return;
    }
    console.log('Iniciando el seeder -> (Person). Cargando registros en la base de datos.');

    const cities = await this.cityRepository.find();
    const countries = await this.countryRepository.find();
    const personTypes = await this.personTypeRepository.find();
    const accounts = await this.accountRepository.find();


    const personData = [
        {
            names: 'Juan',
            father_last_name: 'Perez',
            mother_last_name: 'Gonzalez',
            photo_url: 'https://example.com/photo1.jpg',
            identity_card: 123456,
            identity_card_city: cities[0],
            gender: 'Male',
            age: 25,
            material_status: 'Single',
            dependents: '0',
            personal_number: '789456',
            email: 'juan@perez.com',
            birth_date: new Date('1998-05-15'),
            city: cities[1],
            country: countries[0],
            person_type: personTypes[0],
            value_1: 'Value 1',
            value_2: 'Value 2',
            value_3: 'Value 3',
            value_4: 'Value 4',
            value_5: 'Value 5',
            account: accounts[0],
            person_id: null,

          }
      ];
    
      for (const person of personData) {
        const {  city, country, person_type, account, ...personData } = person;
        const newPerson = this.personRepository.create({
          ...personData,
        
          city: city,
          country: country,
          person_type: person_type,
          account: account
        });
        await this.personRepository.save(newPerson);
      }
    }
}
  