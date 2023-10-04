import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../address/address.entity';
import { Person } from '../person/person.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  short_name: string;

  @OneToMany(() => Address, (address) => address.city) // Corrección: Establecer la relación inversa en 'address.city'
  addresses: Address[];

  @OneToMany(() => Person, (person) => person.city) // Corrección: Establecer la relación inversa en 'address.city'
  persons: Person[];
}
