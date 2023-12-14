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
import { Account } from '../account/account.entity';
import { Address } from '../address/address.entity';
import { User } from '../user/user.entity';
import { DocumentType } from '../document_type/document_type.entity';
import { City } from '../city/city.entity';

@Index(['public_id', 'account_id'], { unique: true })
@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  names: string;

  @Column({ nullable: true })
  father_last_name: string;

  @Column({ nullable: true })
  mother_last_name: string;

  @Column({ nullable: true })
  photo_url: string;

  @Column({ nullable: true })
  identity_card: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true, name: 'identity_card_city_id' })
  identity_card_city_id: number;

  @ManyToOne(() => City, (city) => city.id)
  @JoinColumn({ name: 'identity_card_city_id' })
  identity_card_city: City;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  husband_firstname: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  civil_status: string;

  @Column({ nullable: true })
  birth_date: Date;

  @Column({ nullable: true, name: 'document_type_id' })
  document_type_id: number;

  @ManyToOne(() => DocumentType, (document_type) => document_type.id)
  @JoinColumn({ name: 'document_type_id', referencedColumnName: 'id' })
  document_type: DocumentType;

  @Column({ nullable: true })
  nick_name: string;
  //referencia al account_id
  @Column({ name: 'account_id' })
  account_id: number;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account;

  //public id unique by account_id
  @Column({ name: 'public_id' })
  public_id: number;

  @OneToMany(() => Address, (address) => address.person) // Corrección: Establecer la relación inversa en 'address.person'
  address: Address[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  //referencia de usuario
  @Column({ nullable: true, name: 'user_id' })
  user_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
