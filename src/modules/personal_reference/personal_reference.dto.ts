import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreatePersonalReferenceDTO {
  @IsNumber()
  @IsNotEmpty()
  person_id: number;

  // @IsNumber()
  // @IsNotEmpty()
  // relationship_id: number;

  @IsString()
  @IsOptional()
  relationship: string;

  @IsString()
  full_name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsNumber()
  @IsOptional()
  phone_number: number;

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
