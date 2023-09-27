import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  short_name: string;
}

export class UpdateCityDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  short_name: string;
}
