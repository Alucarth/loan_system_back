import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAccountDto{
    @IsNotEmpty()
    account_name: string;
    @IsNumber()
    interval: number;
}