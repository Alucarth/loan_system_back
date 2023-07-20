import { IsOptional, IsNotEmpty } from "class-validator";

export class CreateAddressDTO{
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone_number: number;

    @IsNotEmpty()
    zone: string;

    @IsNotEmpty()
    address_type: string;

    @IsOptional()
    comments: string;

    @IsOptional()
    status: string;

    @IsNotEmpty()
    city: any;

    @IsNotEmpty()
    person: any;

}