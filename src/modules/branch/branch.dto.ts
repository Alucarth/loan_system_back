import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;
  // el dato phone en Entity esta con dato String
  @IsNotEmpty()
  @IsString()
  phone: string;
}

export class UpdateBranchDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  address: string;
  // el dato phone en Entity esta con dato String
  @IsOptional()
  @IsString()
  phone: string;
}
