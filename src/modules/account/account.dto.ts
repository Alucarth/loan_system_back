import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  account_name: string;

  @IsNotEmpty()
  @IsNumber()
  interval: number;

  @IsNotEmpty()
  @IsString()
  company_name: string;

  @IsNotEmpty()
  @IsString()
  logo_url: string;

  @IsOptional()
  @IsNumber()
  user_id: number;
}

export class UpdateAccountDto {
  @IsOptional()
  @IsString()
  account_name: string;

  @IsOptional()
  @IsString()
  company_name: string;

  @IsOptional()
  @IsString()
  logo_url: string;

  @IsOptional()
  @IsNumber()
  interval: number;

  @IsOptional()
  @IsNumber()
  user_id: number;
}
