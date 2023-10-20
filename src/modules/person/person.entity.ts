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

@Index(['public_id', 'account_id'], { unique: true })
@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  names: string;

  @Column()
  father_last_name: string;

  @Column()
  mother_last_name: string;

  @Column({ nullable: true })
  photo_url: string;

  @Column({ nullable: true })
  identity_card: string;

  // @ManyToOne(() => City, (city) => city.id)
  // @JoinColumn({ name: 'identity_card_city_id' })
  // identity_card_city: City;
 
  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  material_status: string;

  @Column({ nullable: true })
  birth_date: Date;

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
