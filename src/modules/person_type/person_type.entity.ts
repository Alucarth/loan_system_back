import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PersonType{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    state: boolean
}
