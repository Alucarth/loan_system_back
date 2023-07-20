import { IsEmail, IsOptional, IsNotEmpty } from "class-validator";
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
    identity_card_city_id: number;
    // identity_card_city: City;

    @IsNotEmpty()
    person_type_id: number
    // person_type: PersonType;
    @IsOptional()
    city_id: number;

    @IsOptional()
    country_id: number;

    @IsNotEmpty()
    account_id: number;

    @IsOptional()
    personal_number: string;

    @IsEmail()
    email: string;

    @IsOptional()
    gender: string;

    @IsOptional()
    birth_date: Date;

    @IsOptional()
    age: number;

    @IsOptional()
    material_status: string;

    @IsOptional()
    dependents: string;
    
    @IsOptional()
    photo_url: string;
    // @IsNotEmpty()
    // account: Account;
    

}