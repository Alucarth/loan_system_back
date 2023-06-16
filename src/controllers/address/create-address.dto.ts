import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateAddressDTO{
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone_number: number;

    @IsNotEmpty()
    zone: string;

    @IsNotEmpty()
    address_type: string;

    @IsEmpty()
    comments: string;

    @IsEmpty()
    status: string;

    @IsNotEmpty()
    city_id: number;

    @IsNotEmpty()
    person_id: number;

}