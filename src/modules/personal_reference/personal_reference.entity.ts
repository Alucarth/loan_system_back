import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Account } from '../account/account.entity';
import { Person } from '../person/person.entity';
import { Relationship } from '../relationship/relationship.entity';

@Index(['public_id', 'account_id'], { unique: true })
@Entity()
export class PersonalReference {
  @PrimaryGeneratedColumn()
  id: number;

  //referencia al account_id
  @Column({ name: 'person_id' })
  person_id: number;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
  person: Person;

  @Column()
  full_name: string;

  // @Column({ nullable: true, name: 'relationship_id' })
  // relationship_id: number;

  // @ManyToOne(() => Relationship, (relationship) => relationship.id)
  // @JoinColumn({ name: 'relationship_id', referencedColumnName: 'id' })
  // relationship: Relationship;

  @Column({ nullable: true })
  relationship: string;

  @Column({ nullable: true })
  address: string;

  //referencia al phone_number
  @Column({ nullable: true, name: 'phone_number' })
  phone_number: number;

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
