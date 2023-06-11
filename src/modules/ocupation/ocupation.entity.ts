import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "../address/address.entity";

@Entity()
export class Ocupation{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ocupation: string

    @Column()
    ocupation_type: string

    @Column()
    main_ocupation: string

    @Column()
    company_name: string

    @Column()
    work_them: string

    @Column()
    net_income: string

    @Column()
    periodicity_income: string

    @Column()
    workdays: number

    @Column()
    working_hours: number

    @Column()
    status: string

    @Column()
    description: string

    @OneToOne(()=>Address)
    @JoinColumn({name: 'address_id'})
    address: Address

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

}