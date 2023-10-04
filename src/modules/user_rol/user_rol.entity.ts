import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { User } from 'src/modules/user/user.entity';

@Entity()
export class UserRol {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Rol, rol => rol.userRol)
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @OneToOne(() => User, user => user.userRol)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
