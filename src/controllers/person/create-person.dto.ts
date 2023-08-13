import { IsOptional, IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";

export class CreatePersonDto{
    @IsNotEmpty()
    @IsString()
    names: string;

    @IsNotEmpty()
    @IsString()
    father_last_name: string;

    @IsNotEmpty()
    @IsString()
    mother_last_name: string;

    @IsNotEmpty()
    @IsString()
    photo_url: string;
    
    @IsNotEmpty()
    @IsNumber()
    identity_card: number;

    @IsNotEmpty()
    @IsNumber()
    identity_card_city_id: number; //City

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsString()
    material_status?: string;

    @IsNotEmpty()
    @IsString()
    dependents?: string;

    @IsNotEmpty()
    @IsString()
    personal_number: string;

    @IsNotEmpty()
    @IsString()
    email?: string;

    @IsNotEmpty()
    @IsDate()
    birth_date: Date;

    @IsNotEmpty()
    @IsNumber()
    city_id: number;    //City

    @IsNotEmpty()
    @IsNumber()
    country_id: number; //Country

    @IsNotEmpty()
    @IsNumber()
    person_type_id: number; //PersonType

    @IsOptional()
    @IsString()
    value_1?: string;

    @IsOptional()
    @IsString()
    value_2?: string;

    @IsOptional()
    @IsString()
    value_3?: string;

    @IsOptional()
    @IsString()
    value_4?: string;

    @IsOptional()
    @IsString()
    value_5?: string;

    @IsNotEmpty()
    @IsNumber()
    person_id:number;
    
    @IsNotEmpty()
    @IsNumber()
    account_id: number; //Account
}