import { Person } from "src/modules/person/person.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500})
    username: string;

    @Column('text')
    password: string;

    @Column()
    added_user_id: number

    @Column()
    deleted_user_id: number
    
    @OneToOne(()=>Person)
    @JoinColumn({name:'person_id'})
    person: Person

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

}