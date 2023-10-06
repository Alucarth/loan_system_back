import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGuarantyTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    state: boolean;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}

export class UpdateGuarantyTypeDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsBoolean()
    state: boolean;
  
    @IsOptional()
    @IsNumber()
    user_id: number;
  }