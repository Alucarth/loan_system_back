import { IsOptional, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRelationshipDTO {
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
