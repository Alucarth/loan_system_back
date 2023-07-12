import { IsNotEmpty } from "class-validator";

export class CreatePersonTypeDto{
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    state: boolean
}

export class UpdatePersonTypeDto{
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    state: boolean
}