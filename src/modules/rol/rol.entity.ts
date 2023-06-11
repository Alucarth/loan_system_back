import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string 
}