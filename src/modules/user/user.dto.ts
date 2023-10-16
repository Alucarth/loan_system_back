import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  added_user_id: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  deleted_user_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  person_id: number;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  username: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  added_user_id: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  deleted_user_id: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  person_id: number;
}
