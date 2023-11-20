import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { City } from '../city/city.entity';
import { Person } from '../person/person.entity';
import { Ocupation } from '../ocupation/ocupation.entity';
import { User } from '../user/user.entity';
import { Account } from '../account/account.entity';
import { Zone } from '../zone/zone.entity';
import { PropertyType } from '../property_type/property_type.entity';
import { LocationType } from '../location_type/location_type.entity';
@Index(['public_id', 'account_id'], { unique: true })
@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Person, (person) => person.address)
  @JoinColumn({ name: 'person_id' })
  person: Person;

  @Column()
  address: string;

  @Column({ nullable: true })
  phone_number: number;

  @Column({ nullable: true, name: 'city_id' })
  city_id: number;

  @ManyToOne(() => City, (city) => city.id)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  city: City;

  @Column({ nullable: true, name: 'zone_id' })
  zone_id: number;

  @ManyToOne(() => Zone, (zone) => zone.id)
  @JoinColumn({ name: 'zone_id', referencedColumnName: 'id' })
  zone: Zone;

  @Column({ nullable: true, name: 'property_type_id' })
  property_type_id: number;

  @ManyToOne(() => PropertyType, (property_type) => property_type.id)
  @JoinColumn({ name: 'property_type_id', referencedColumnName: 'id' })
  property_type: PropertyType;

  @Column({ nullable: true, name: 'location_type_id' })
  location_type_id: number;

  @ManyToOne(() => LocationType, (location_type) => location_type.id)
  @JoinColumn({ name: 'location_type_id', referencedColumnName: 'id' })
  location_type: LocationType;

  @Column({ nullable: true })
  latitude: string;

  @Column({ nullable: true })
  longitude: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ default: false })
  direcction_type: boolean;

  //referencia al account_id
  @Column({ name: 'account_id' })
  account_id: number;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account;

  //public id unique by account_id
  @Column({ name: 'public_id' })
  public_id: number;

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date

  @DeleteDateColumn()
  deleted_at: Date; // Deletion date

  //referencia de usuario
  @Column({ nullable: true, name: 'user_id' })
  user_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
