import { PartialType } from '@nestjs/swagger';
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
  IsObject,
} from 'class-validator';
import { DocumentType } from '../document_type/document_type.entity';

export class CreatePersonDto {
  @IsNotEmpty()
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
  husband_firstname: string;

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
  civil_status?: string;

  @IsOptional()
  @IsString()
  birth_date: Date;

  @IsOptional()
  @IsString()
  nick_name: string;

  @IsOptional()
  @IsString()
  complement: string;

  @IsOptional()
  @IsNumber()
  identity_card_city_id: number;

  @IsOptional()
  @IsNumber()
  document_type_id: number;

  @IsOptional()
  @IsObject()
  document_type: DocumentType;

  @IsOptional()
  @IsNumber()
  public_id: number;

  @IsNotEmpty()
  @IsNumber()
  account_id: number; //Account
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
