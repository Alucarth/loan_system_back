import { IsNotEmpty } from "class-validator";

export class CreateOcupationDto{
    @IsNotEmpty()
    ocupation: string

    @IsNotEmpty()
    ocupation_type: string

    @IsNotEmpty()
    main_ocupation: string

    @IsNotEmpty()
    company_name: string

    @IsNotEmpty()
    work_them: string

    @IsNotEmpty()
    net_income: string

    @IsNotEmpty()
    periodicity_income: string

    @IsNotEmpty()
    workdays: number

    @IsNotEmpty()
    working_hours: number

    @IsNotEmpty()
    status: string

    @IsNotEmpty()
    description: string
}

export class UpdateOcupationDto{
    @IsNotEmpty()
    ocupation: string

    @IsNotEmpty()
    ocupation_type: string

    @IsNotEmpty()
    main_ocupation: string

    @IsNotEmpty()
    company_name: string

    @IsNotEmpty()
    work_them: string

    @IsNotEmpty()
    net_income: string

    @IsNotEmpty()
    periodicity_income: string

    @IsNotEmpty()
    workdays: number

    @IsNotEmpty()
    working_hours: number

    @IsNotEmpty()
    status: string

    @IsNotEmpty()
    description: string
}