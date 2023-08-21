import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "../rol/rol.entity";
import { User } from "../user/user.entity";

@Entity()
export class UserRol{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Rol, (rol) => rol.userRol)
    @JoinColumn({name: 'rol_id'})
    rol: Rol;

    @ManyToOne(()=>User, (user) => user.userRol)
    @JoinColumn({name: 'user_id'})
    user: User;
}