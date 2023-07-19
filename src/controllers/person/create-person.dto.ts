import { IsEmpty, IsNotEmpty } from "class-validator";
import { Account } from "src/modules/account/account.entity";
import { Address } from "src/modules/address/address.entity";
import { City } from "src/modules/city/city.entity";
import { Country } from "src/modules/country/country.entity";
import { PersonType } from "src/modules/person_type/person_type.entity";


export class CreatePersonDto{
    
    @IsNotEmpty()
    names: string;

    @IsNotEmpty()
    father_last_name: string;

    @IsNotEmpty()
    mother_last_name: string;

    @IsNotEmpty()
    identity_card_city: City;

    @IsNotEmpty()
    person_type: PersonType;

    @IsNotEmpty()
    city: City;

    @IsNotEmpty()
    country: Country;

    @IsNotEmpty()
    account: Account;
    

}