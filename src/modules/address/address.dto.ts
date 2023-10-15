import { IsOptional, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAddressDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsOptional()
  city_id: number;

  @IsString()
  address: string;

  @IsNumber()
  @IsOptional()
  phone_number: number;

  @IsString()
  @IsOptional()
  zone: string;

  @IsString()
  @IsOptional()
  property: string;

  @IsString()
  @IsOptional()
  address_type: string;

  @IsString()
  @IsOptional()
  comments: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsNumber()
  @IsOptional()
  user_id: number;

  @IsNumber()
  @IsOptional()
  person_id: number;
}

export class UpdateAddressDTO {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsNumber()
  @IsOptional()
  city_id: number;

  @IsString()
  @IsOptional()
  address: string;

  @IsNumber()
  @IsOptional()
  phone_number: number;

  @IsString()
  @IsOptional()
  zone: string;

  @IsString()
  @IsOptional()
  property: string;

  @IsString()
  @IsOptional()
  address_type: string;

  @IsString()
  @IsOptional()
  comments: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsNumber()
  @IsOptional()
  user_id: number;

  @IsNumber()
  @IsOptional()
  person_id: number;
}