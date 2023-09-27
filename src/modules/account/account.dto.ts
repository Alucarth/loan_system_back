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

  //aqui si lo dejo con opcional por que no se que datos entrarian
  // pero si se que son cadenas (String)
  @IsOptional()
  @IsString()
  label_1: string;

  @IsOptional()
  @IsString()
  label_2: string;

  @IsOptional()
  @IsString()
  label_3: string;

  @IsOptional()
  @IsString()
  label_4: string;

  @IsOptional()
  @IsString()
  label_5: string;
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
  @IsString()
  label_1: string;

  @IsOptional()
  @IsString()
  label_2: string;

  @IsOptional()
  @IsString()
  label_3: string;

  @IsOptional()
  @IsString()
  label_4: string;

  @IsOptional()
  @IsString()
  label_5: string;
}
