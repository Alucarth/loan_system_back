<<<<<<< HEAD
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRol } from "../user_rol/user_rol.entity";
=======
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
>>>>>>> 590ead470683b44369ed726a211b4c484638bd80

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

<<<<<<< HEAD
    @Column()
    name: string 

    @OneToMany(() => UserRol, userRol => userRol.rol) // Corrección: Establecer la relación inversa en 'address.person'
    userRol: UserRol[];
}
=======
  @Column()
  name: string;
}
>>>>>>> 590ead470683b44369ed726a211b4c484638bd80
