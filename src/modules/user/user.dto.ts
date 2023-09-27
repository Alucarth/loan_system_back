import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsNumber()
    added_user_id: number;

    @IsOptional()
    @IsNumber()
    deleted_user_id: number;

    @IsNotEmpty()
    person: number;
}

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    username: string;
  
    @IsOptional()
    @IsString()
    password: string;
  
    @IsOptional()
    @IsNumber()
    added_user_id: number;
  
    @IsOptional()
    @IsNumber()
    deleted_user_id: number;
  
    @IsOptional()
    person: number;
}