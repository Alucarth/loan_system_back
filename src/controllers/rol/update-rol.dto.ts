import { IsNotEmpty } from "class-validator";

export class UpdateRolDto{
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    name: string

}
