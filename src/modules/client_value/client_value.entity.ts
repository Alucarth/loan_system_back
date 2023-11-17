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
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { Client } from '../client/client.entity';
import { ClientInput } from '../client_input/client_input.entity';
@Index(['public_id', 'account_id'], { unique: true })
@Entity()
export class ClientValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  value: string;

  //referencia a person
  @Column({ name: 'client_id' })
  client_id: number;

  @ManyToOne(() => Client, (client) => client.id)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'id' })
  client: Client;

  //referencia a person
  @Column({ name: 'client_input_id' })
  client_input_id: number;

  @ManyToOne(() => ClientInput, (client_input) => client_input.id)
  @JoinColumn({ name: 'client_input_id', referencedColumnName: 'id' })
  client_input: ClientInput;

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
