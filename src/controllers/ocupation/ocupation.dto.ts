import { IsNotEmpty,IsNumber,IsOptional, IsString } from "class-validator";

export class CreateOcupationDto{
    @IsNotEmpty()
    @IsString()
    ocupation: string;

    @IsNotEmpty()
    @IsNumber()
    address_id: number;

    @IsNotEmpty()
    @IsString()
    ocupation_type: string;

    @IsNotEmpty()
    @IsString()
    main_ocupation: string;

    @IsNotEmpty()
    @IsString()
    company_name: string;

    @IsNotEmpty()
    @IsString()
    work_them: string;

    @IsNotEmpty()
    @IsString()
    net_income: string;

    @IsNotEmpty()
    @IsString()
    periodicity_income: string;

    @IsNotEmpty()
    @IsNumber()
    workdays: number;

    @IsNotEmpty()
    @IsNumber()
    working_hours: number;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}

export class UpdateOcupationDto{
    @IsOptional()
    @IsString()
    ocupation: string;

    @IsOptional()
    @IsNumber()
    address_id: number;

    @IsOptional()
    @IsString()
    ocupation_type: string;

    @IsOptional()
    @IsString()
    main_ocupation: string;

    @IsOptional()
    @IsString()
    company_name: string;

    @IsOptional()
    @IsString()
    work_them: string;

    @IsOptional()
    @IsString()
    net_income: string;

    @IsOptional()
    @IsString()
    periodicity_income: string;

    @IsOptional()
    @IsNumber()
    workdays: number;

    @IsOptional()
    @IsNumber()
    working_hours: number;

    @IsOptional()
    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    description: string;
}