import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

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
