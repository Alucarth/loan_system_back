import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsObject,
  IsBoolean,
} from 'class-validator';
import { Zone } from '../zone/zone.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateAddressDTO {
  @IsNumber()
  @IsOptional()
  city_id: number;

  @IsString()
  address: string;

  @IsNumber()
  @IsOptional()
  phone_number: number;

  @IsNumber()
  @IsOptional()
  zone_id: number;

  @IsNumber()
  @IsOptional()
  property_type_id: number;

  @IsOptional()
  @IsNumber()
  location_type_id: number;

  // @IsString()
  // @IsOptional()
  // property: string;

  @IsString()
  @IsOptional()
  address_type: string;

  @IsBoolean()
  @IsOptional()
  direcction_type: boolean;

  @IsString()
  @IsOptional()
  comments: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsNumber()
  @IsOptional()
  person_id: number;

  @IsOptional()
  @IsNumber()
  user_id: number;

  @IsOptional()
  @IsNumber()
  account_id: number;

  @IsOptional()
  @IsNumber()
  public_id: number;
}
export class UpdateAddressDTO extends PartialType(CreateAddressDTO) {}
// export class UpdateAddressDTO {
//   @IsNumber()
//   @IsOptional()
//   id: number;

//   @IsNumber()
//   @IsOptional()
//   city_id: number;

//   @IsString()
//   @IsOptional()
//   address: string;

//   @IsNumber()
//   @IsOptional()
//   phone_number: number;

//   @IsString()
//   @IsOptional()
//   zone: string;

//   // @IsString()
//   // @IsOptional()
//   // property: string;

//   @IsString()
//   @IsOptional()
//   address_type: string;

//   @IsString()
//   @IsOptional()
//   comments: string;

//   // @IsString()
//   // @IsOptional()
//   // status: string;

//   @IsNumber()
//   @IsOptional()
//   person_id: number;

//   @IsOptional()
//   @IsNumber()
//   user_id: number;

//   @IsOptional()
//   @IsNumber()
//   account_id: number;

//   @IsOptional()
//   @IsNumber()
//   public_id: number;
// }
