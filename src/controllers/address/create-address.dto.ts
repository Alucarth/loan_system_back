import { IsOptional, IsNotEmpty } from "class-validator";

export class CreateAddressDTO{
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone_number: number;

    @IsOptional()
    zone: string;

    @IsOptional()
    address_type: string;

    @IsOptional()
    comments: string;

    @IsOptional()
    status: string;

    @IsOptional()
    city: any;

    @IsNotEmpty()
    person: any

    @IsOptional()
    ocupations: Array<any>

}