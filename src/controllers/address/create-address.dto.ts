import { IsOptional, IsNotEmpty } from "class-validator";

export class CreateAddressDTO{

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone_number: number;

    @IsNotEmpty()
    zone: string;

    @IsNotEmpty()
    property: string;

    @IsNotEmpty()
    address_type: string;

    @IsNotEmpty()
    comments?: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    city_id: number;

    @IsNotEmpty()
    person_id: number;

}

export class UpdateAddressDTO{
    @IsOptional()
    address: string;

    @IsOptional()
    phone_number: number;

    @IsOptional()
    zone: string;

    @IsOptional()
    property: string;

    @IsOptional()
    address_type: string;

    @IsOptional()
    comments?: string;

    @IsOptional()
    status: string;

    @IsOptional()
    city_id: number;

    @IsOptional()
    person_id: number;
}