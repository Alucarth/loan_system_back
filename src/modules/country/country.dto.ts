import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCountryDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    short_name: string;
}
export class UpdateCountryDto{

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    short_name: string;
}