import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "../city/city.entity";
import { Person } from "../person/person.entity";

@Entity()
export class Address{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    address: string

    @Column()
    phone_number: number

    //puede seruna tabla pero estoy hay que discutirlo
    @Column()
    zone: string

    @Column()
    property: string
    
    @Column()
    address_type: string 

    @Column()
    comments: string

    @Column()
    status: string

    @OneToOne(()=>City)
    @JoinColumn({name: 'city_id'})
    city: City

    @OneToOne(()=> Person)
    @JoinColumn({name: 'person_id'})
    person: Person

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date


}