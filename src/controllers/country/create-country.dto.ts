import { IsNotEmpty } from "class-validator";

export class CreateCountryDto{
    
    @IsNotEmpty()
    name: string

    @IsNotEmpty() 
    short_name: string
}