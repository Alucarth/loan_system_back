import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  short_name: string;

  @OneToMany(() => Person, person => person.country)
  persons: Person[]; // Agregado esta propiedad para la relacion con Person
}
