import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";

export class CreatePersonDto{
    @IsNotEmpty()
    @IsString()
    names: string;

    @IsNotEmpty()
    @IsString()
    father_last_name: string;

    @IsNotEmpty()
    @IsString()
    mother_last_name: string;

    @IsNotEmpty()
    @IsString()
    photo_url: string;

    @IsNotEmpty()
    @IsString()
    identity_card: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsString()
    material_status: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    birth_date: Date;

    @IsNotEmpty()
    @IsNumber()
    account_id: number;

    @IsNotEmpty()
    @IsNumber()
    public_id: number;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}