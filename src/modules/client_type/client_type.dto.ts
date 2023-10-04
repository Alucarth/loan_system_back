import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClientTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}

export class UpdateClientTypeDto {
    @IsOptional()
    @IsString()
    name: string;
  
    @IsOptional()
    @IsNumber()
    user_id: number;
  }