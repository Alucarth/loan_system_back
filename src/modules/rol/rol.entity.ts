import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRol } from "../user_rol/user_rol.entity";

@Entity()
export class Rol{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string 

    @OneToMany(() => UserRol, userRol => userRol.rol) // Corrección: Establecer la relación inversa en 'address.person'
    userRol: UserRol[];
}