import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
} from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  names: string;

  @IsNotEmpty()
  @IsString()
  father_last_name: string;

  @IsNotEmpty()
  @IsString()
  mother_last_name: string;

  @IsNotEmpty()
  @IsString()
  photo_url: string;

  @IsNotEmpty()
  @IsNumber()
  identity_card: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  civil_status?: string;

  @IsNotEmpty()
  @IsDate()
  birth_date: Date;

  @IsNotEmpty()
  @IsNumber()
  public_id: number;

  @IsNotEmpty()
  @IsNumber()
  account_id: number; //Account
}
