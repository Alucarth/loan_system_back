import { IsNotEmpty } from "class-validator";

export class UpdateCountryDto{
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    name: string

    @IsNotEmpty() 
    short_name: string
}