import { IsNotEmpty } from "class-validator";


export class UpdatePersonDto{
    
    @IsNotEmpty()
    names: string;

    @IsNotEmpty()
    father_last_name: string;

    @IsNotEmpty()
    mother_last_name: string;

    @IsNotEmpty()
    identity_card_city_id: number;

    @IsNotEmpty()
    city_id: number;

    @IsNotEmpty()
    country_id: number;

    @IsNotEmpty()
    account_id: number;

}