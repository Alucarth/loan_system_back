import { Person } from 'src/modules/person/person.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string;

  @Column('text')
  password: string;

  @Column({ nullable: true })
  added_user_id: number;

  @Column({ nullable: true })
  deleted_user_id: number;

  //referencia de usuario
  @Column({ nullable: true, name: 'person_id' })
  user_id: number;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
  person: Person;

  //antes de establecer este tipo de relaciones consultar sobre esto
  //esto esta mal el user no deberia tener busqueda por relacion inversa no esta mal la idea pero a nivel logico no deberia hacerse por que genera estres con las consultas en la base de datos

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date

  @DeleteDateColumn()
  deleted_at: Date; // Deletion date
}
