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
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { Client } from '../client/client.entity';

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
