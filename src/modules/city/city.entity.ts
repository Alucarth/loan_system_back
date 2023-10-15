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
  // no hacer esto por que no habra consulta a la inversa esto esta mal siempre es e un solo sentido para estos casos si se requiere se realizara una consulta especifica
}
