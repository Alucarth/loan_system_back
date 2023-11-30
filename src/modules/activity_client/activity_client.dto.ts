import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateActivityClientDTO {
  @IsNumber()
  @IsNotEmpty()
  client_id: number;

  @IsString()
  activity: string;

  @IsBoolean()
  @IsOptional()
  activity_main: boolean;

  @IsNumber()
  @IsOptional()
  activity_type_id: number;

  @IsNumber()
  @IsOptional()
  activity_frecuency_id: number;

  @IsString()
  @IsOptional()
  company: string;

  @IsNumber()
  @IsOptional()
  incomes: number;

  @IsString()
  @IsOptional()
  years_work: string;

  @IsString()
  @IsOptional()
  days_work: string;

  @IsString()
  @IsOptional()
  time_work: string;

  @IsString()
  @IsOptional()
  comments: string;

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
