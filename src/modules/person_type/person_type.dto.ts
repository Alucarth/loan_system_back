import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePersonTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  state: boolean;
}

export class UpdatePersonTypeDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  state: boolean;
}
