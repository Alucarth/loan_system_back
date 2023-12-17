import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePersonDto{
  @IsOptional()
  @IsString()
  names: string;

  @IsOptional()
  @IsString()
  father_last_name: string;

  @IsOptional()
  @IsString()
  mother_last_name: string;

  @IsOptional()
  @IsString()
  photo_url: string;

  @IsOptional()
  @IsString()
  identity_card: string;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsString()
  material_status: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  birth_date: Date;

  @IsOptional()
  @IsNumber()
  account_id: number;

  @IsOptional()
  @IsNumber()
  public_id: number;

  @IsOptional()
  @IsNumber()
  user_id: number;
}
