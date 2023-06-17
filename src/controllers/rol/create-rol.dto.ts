import { IsNotEmpty } from "class-validator";

export class CreateRolDto{
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    name: string

}
