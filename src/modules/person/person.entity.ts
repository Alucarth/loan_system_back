import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PersonType } from "../person_type/person_type.entity";
import { City } from "../city/city.entity";
import { Country } from "../country/country.entity";
import { Account } from "../account/account.entity";

@Entity()
export class Person{
    @PrimaryGeneratedColumn() 
    id: number

    @Column()
    names: string

    @Column()
    father_last_name: string

    @Column()
    mother_last_name: string

    @Column({nullable: true})
    photo_url: string

    @Column({nullable: true})
    identity_card: number

    @OneToOne(()=>City)
    @JoinColumn({name:'identity_card_city_id'})
    city_card: City

    @Column({nullable: true})
    gender: string

    @Column({nullable: true})
    material_status: string

    @Column({nullable: true})
    dependents: string

    @Column({nullable: true})
    personal_number: string

    @Column({nullable: true})
    email: string

    @Column({nullable: true})
    birth_date: Date

    @OneToOne(()=> City)
    @JoinColumn({name: 'city_id'})
    city: City

    @OneToOne(()=> Country)
    @JoinColumn({name: 'country_id'})
    country: Country

    @OneToOne( ()=> PersonType)
    @JoinColumn({name: 'person_type_id'})
    person_type: PersonType

    @Column({nullable: true})
    value_1: string

    @Column({nullable: true})
    value_2: string

    @Column({nullable: true})
    value_3: string

    @Column({nullable: true})
    value_4: string

    @Column({nullable: true})
    value_5: string

    @OneToOne(()=>Account)
    @JoinColumn({name: 'account_id'})
    account: Account

}