import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Person } from '../person/person.entity';
import { City } from '../city/city.entity';
import { Country } from '../country/country.entity';
import { ClientType } from '../client_type/client_type.entity';

export class ClientDto {
  @IsOptional()
  @IsObject()
  person: Person;

  @IsOptional()
  @IsNumber()
  person_id: number;

  @IsOptional()
  @IsString()
  dependents: string;

  @IsOptional()
  @IsNumber()
  personal_number: number;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  ages: string;
  // @IsNotEmpty()
  // @IsObject()
  // city: City;

  // @IsNotEmpty()
  // @IsObject()
  // country: Country;

  @IsOptional()
  @IsNumber()
  client_type_id: number;

  @IsOptional()
  @IsObject()
  client_type: ClientType;

  @IsOptional()
  @IsString()
  bank: string;

  @IsOptional()
  @IsString()
  titular_bank: string;

  @IsOptional()
  @IsString()
  number_account_bank: string;

  @IsOptional()
  @IsString()
  gchash: string;

  // @IsOptional()
  // @IsString()
  // value_1: string;

  // @IsOptional()
  // @IsString()
  // value_2: string;

  // @IsOptional()
  // @IsString()
  // value_3: string;

  // @IsOptional()
  // @IsString()
  // value_4: string;

  // @IsOptional()
  // @IsString()
  // value_5: string;

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
