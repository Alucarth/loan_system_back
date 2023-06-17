import { IsEmpty, IsNotEmpty } from "class-validator";


export class CreatePersonDto{
    
    @IsNotEmpty()
    names: string;

    @IsNotEmpty()
    father_last_name: string;

    @IsNotEmpty()
    mother_last_name: string;

    @IsNotEmpty()
    identity_card_city: any;

    @IsNotEmpty()
    person_type: any;

    @IsNotEmpty()
    city: any;

    @IsNotEmpty()
    country: any;

    @IsNotEmpty()
    account_id: number;

    @IsEmpty()
    addresses: any[]

}