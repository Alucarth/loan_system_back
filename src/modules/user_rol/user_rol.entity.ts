<<<<<<< HEAD
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
=======
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { User } from 'src/modules/user/user.entity';

@Entity()
export class UserRol {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Rol)
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
>>>>>>> 590ead470683b44369ed726a211b4c484638bd80
