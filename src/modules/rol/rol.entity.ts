import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRol } from '../user_rol/user_rol.entity';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => UserRol, (userRol) => userRol.rol)
  userRol: UserRol; // Agregado esta propiedad para la relación con UserRol
}
