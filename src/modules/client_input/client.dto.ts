import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClientInputDto {
  @IsNotEmpty()
  @IsString()
  label: string;

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
