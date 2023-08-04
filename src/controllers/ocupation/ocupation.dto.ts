import { IsNotEmpty,IsOptional } from "class-validator";

export class CreateOcupationDto{
    
    @IsNotEmpty()
    ocupation: string

    @IsNotEmpty()
    address_id: number

    @IsOptional()
    ocupation_type: string

    @IsOptional()
    main_ocupation: string

    @IsOptional()
    company_name: string

    @IsOptional()
    work_them: string

    @IsOptional()
    net_income: string

    @IsOptional()
    periodicity_income: string

    @IsOptional()
    workdays: number

    @IsOptional()
    working_hours: number

    @IsOptional()
    status: string

    @IsOptional()
    description: string
}

export class UpdateOcupationDto{
    ocupation: string

    @IsNotEmpty()
    address_id: number

    @IsOptional()
    ocupation_type: string

    @IsOptional()
    main_ocupation: string

    @IsOptional()
    company_name: string

    @IsOptional()
    work_them: string

    @IsOptional()
    net_income: string

    @IsOptional()
    periodicity_income: string

    @IsOptional()
    workdays: number

    @IsOptional()
    working_hours: number

    @IsOptional()
    status: string

    @IsOptional()
    description: string
}