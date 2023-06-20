import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "../city/city.entity";
import { Person } from "../person/person.entity";

@Entity()
export class Address{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Person,(person)=>person.id)
    @JoinColumn({name: 'person_id'})
    person: Person

    @ManyToOne(()=>City,(city)=>city.id)
    @JoinColumn({name: 'city_id'})
    city: City


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

     

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date


}