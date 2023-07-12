import { IsNotEmpty } from "class-validator";

export class UpdateCountryDto{

    @IsNotEmpty()
    name: string

    @IsNotEmpty() 
    short_name: string
}