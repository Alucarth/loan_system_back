import { IsOptional, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateAddressDTO{

    @IsNotEmpty()
    @IsNumber()
    person_id: number;

    @IsNotEmpty()
    @IsNumber()
    city_id: number;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsNumber()
    phone_number: number;

    @IsNotEmpty()
    @IsString()
    zone: string;

    @IsNotEmpty()
    @IsString()
    property: string;

    @IsNotEmpty()
    @IsString()
    address_type: string;

    @IsNotEmpty()
    @IsString()
    comments: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    //este dato no esta en entity pero si el person_id que si hace refencia al id de Person
    @IsOptional()
    person: any
    //este dato es una relacion refencial que no tiene una columna creada en Address si no en Ocupation
    @IsOptional()
    ocupations: Array<any>

}

export class UpdateAddressDTO{
    @IsOptional()
    @IsNumber()
    person_id: number;

    @IsOptional()
    @IsNumber()
    city_id: number;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsNumber()
    phone_number: number;

    @IsOptional()
    @IsString()
    zone: string;

    @IsOptional()
    @IsString()
    property: string;

    @IsOptional()
    @IsString()
    address_type: string;

    @IsOptional()
    @IsString()
    comments: string;

    @IsOptional()
    @IsString()
    status: string;

    //este dato no esta en entity pero si el person_id que si hace refencia al id de Person
    @IsOptional()
    person: any
    //este dato es una relacion refencial que no tiene una columna creada en Address si no en Ocupation
    @IsOptional()
    ocupations: Array<any>
}