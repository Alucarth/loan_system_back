import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePersonDto {
  @IsOptional()
  @IsString()
  names?: string;

  @IsOptional()
  @IsString()
  father_last_name?: string;

  @IsOptional()
  @IsString()
  mother_last_name?: string;

  @IsOptional()
  @IsString()
  photo_url?: string;

  @IsOptional()
  @IsNumber()
  identity_card?: number;

  @IsOptional()
  @IsNumber()
  identity_card_city_id?: number; //City

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  material_status?: string;

  @IsOptional()
  @IsString()
  dependents?: string;

  @IsOptional()
  @IsString()
  personal_number?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsDate()
  birth_date?: Date;

  @IsOptional()
  @IsNumber()
  city_id?: number; //City

  @IsOptional()
  @IsNumber()
  country_id?: number; //Country

  @IsOptional()
  @IsNumber()
  person_type_id?: number; //PersonType

  @IsOptional()
  @IsString()
  value_1?: string;

  @IsOptional()
  @IsString()
  value_2?: string;

  @IsOptional()
  @IsString()
  value_3?: string;

  @IsOptional()
  @IsString()
  value_4?: string;

  @IsOptional()
  @IsString()
  value_5?: string;

  @IsOptional()
  @IsNumber()
  account_id?: number; //Account
}
