import { IsNotEmpty } from "class-validator";

export class UpdateCityDto{
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    short_name: string
}