import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "../rol/rol.entity";
import { User } from "src/user/user.entity";

@Entity()
export class UserRol{
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(()=>Rol)
    @JoinColumn({name: 'rol_id'})
    rol: Rol

    @OneToOne(()=>User)
    @JoinColumn({name: 'user_id'})
    user: User
}