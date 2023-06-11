import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PersonType{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    state: boolean
}
