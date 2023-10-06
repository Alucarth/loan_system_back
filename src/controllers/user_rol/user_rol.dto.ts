import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateUserRolDto{
    @IsNotEmpty()
    @IsNumber()
    rol_id: number;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}

export class UpdateUserRolDto{
    @IsOptional()
    @IsNumber()
    rol_id: number;

    @IsOptional()
    @IsNumber()
    user_id: number;
}