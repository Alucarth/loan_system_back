import { IsNotEmpty } from "class-validator";

export class CreateCountryDto{
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    name: string

    @IsNotEmpty() 
    short_name: string
}