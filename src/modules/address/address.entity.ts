import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "../city/city.entity";
import { Person } from "../person/person.entity";
import { Ocupation } from "../ocupation/ocupation.entity";

@Entity()
export class Address{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Person,(person)=>person.id)
    @JoinColumn({name: 'person_id'})
    person: Person

    @Column({nullable: true , name: 'city_id'})
    city_id: number


    @ManyToOne(()=>City,(city)=>city.id)
    @JoinColumn({name: 'city_id', referencedColumnName: 'id'})
    city: City


    @Column()
    address: string

    @Column({nullable: true})
    phone_number: number

    //puede seruna tabla pero estoy hay que discutirlo
    @Column({nullable: true})
    zone: string

    @Column({nullable: true})
    property: string
    
    @Column({nullable: true})
    address_type: string 

    @Column({nullable: true})
    comments: string

    @Column({nullable: true})
    status: string

     

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

    @OneToMany(() => Ocupation, (ocupation) => ocupation.address)
    ocupations: Ocupation;

}