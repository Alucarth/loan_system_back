import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Person } from '../person/person.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { EmployeeType } from '../employee_type/employee_type.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  //referencia a person
  @Column({ name: 'person_id' })
  person_id: number;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
  person: Person;

  @ManyToOne(() => EmployeeType, (employee_type) => employee_type.id)
  @JoinColumn({ name: 'employee_type_id' })
  employee_type: EmployeeType;

  //referencia al account_id
  @Column({ name: 'account_id' })
  account_id: number;

  @ManyToOne(() => Account, (account) => account.branches)
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
