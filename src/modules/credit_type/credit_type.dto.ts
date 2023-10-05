import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateCreditTypeDto {
    @IsNotEmpty()
    @IsBoolean()
    state: boolean;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}

export class UpdateCreditTypeDto {
    @IsOptional()
    @IsBoolean()
    state: boolean;
  
    @IsOptional()
    @IsNumber()
    user_id: number;
  }