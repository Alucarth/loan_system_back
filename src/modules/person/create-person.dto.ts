<<<<<<< HEAD
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";
=======
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
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476

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

<<<<<<< HEAD
    @IsNotEmpty()
    @IsString()
    photo_url: string;

    @IsNotEmpty()
    @IsString()
    identity_card: string;
=======
  @IsOptional()
  @IsString()
  photo_url: string;

  @IsOptional()
  @IsString()
  identity_card: string;
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsNumber()
  age: number;

<<<<<<< HEAD
    @IsNotEmpty()
    @IsString()
    material_status: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    birth_date: Date;

    @IsNotEmpty()
    @IsNumber()
    account_id: number;

    @IsNotEmpty()
    @IsNumber()
    public_id: number;

    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}
=======
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
>>>>>>> 7a56b74d233900c6f86d3b60e875ab248c35d476
