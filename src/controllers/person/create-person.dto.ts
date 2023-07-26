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

    @IsOptional()
    photo_url?: string;
    
    @IsOptional()
    identity_card?: number;

    @IsOptional()
    identity_card_city_id: number; //City

    @IsOptional()
    gender?: string;

    @IsOptional()
    age?: number;

    @IsOptional()
    material_status?: string;

    @IsOptional()
    dependents?: string;

    @IsOptional()
    personal_number?: string;

    @IsOptional()
    email?: string;

    @IsOptional()
    birth_date?: Date;

    @IsOptional()
    city_id: number;    //City

    @IsOptional()
    country_id: number; //Country

    @IsOptional()
    person_type_id: number; //PersonType

    @IsOptional()
    value_1?: string;
    @IsOptional()
    value_2?: string;
    @IsOptional()
    value_3?: string;
    @IsOptional()
    value_4?: string;
    @IsOptional()
    value_5?: string;

    @IsOptional()
    account_id: number; //Account

}