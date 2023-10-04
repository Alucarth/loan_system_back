import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRolDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;
}

export class UpdateRolDto{
    @IsOptional()
    @IsString()
    @ApiProperty()
    name: string;
}
