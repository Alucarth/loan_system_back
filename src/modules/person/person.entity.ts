import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PersonType } from "../person_type/person_type.entity";
import { City } from "../city/city.entity";
import { Country } from "../country/country.entity";
import { Account } from "../account/account.entity";
import { Address } from "../address/address.entity";
import { User } from "src/user/user.entity";

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

    @ManyToOne(()=>City,(city)=>city.id)
    @JoinColumn({name:'identity_card_city_id'})
    identity_card_city: City

    @Column({nullable: true})
    gender: string

    @Column({nullable: true})
    age: number

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

    @ManyToOne(()=> City, (city)=> city.id)
    @JoinColumn({name: 'city_id'})
    city: City

    @ManyToOne(()=> City, (city)=> city.id)
    @JoinColumn({name: 'city_card_id'})
    city_card: City

    @ManyToOne(()=> Country,(country)=>country.id)
    @JoinColumn({name: 'country_id'})
    country: Country

    @ManyToOne( ()=> PersonType,(person_type)=>person_type.id)
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

    @ManyToOne(()=>Account,(account)=>account.id)
    @JoinColumn({name: 'account_id'})
    account: Account

    //referencia de persona 
    @Column({nullable: true , name: 'person_id'})
    person_id: number

    @ManyToOne(()=> Person, (person)=> person.id)
    @JoinColumn({name: 'person_id', referencedColumnName: 'id'})
    person: Person

    @OneToMany(() => Address, address => address.person) // Corrección: Establecer la relación inversa en 'address.person'
    address: Address[];

    @OneToOne(() => User, user => user.person )
    user: User;
}