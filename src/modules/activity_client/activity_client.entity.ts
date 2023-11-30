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
import { Client } from '../client/client.entity';
import { ActivityType } from '../activity_type/activity_type.entity';
import { ActivityFrecuency } from '../activity_frecuency/activity_frecuency.entity';

@Index(['public_id', 'account_id'], { unique: true })
@Entity()
export class ActivityClient {
  @PrimaryGeneratedColumn()
  id: number;

  //referencia al account_id
  @Column({ name: 'client_id' })
  client_id: number;

  @ManyToOne(() => Client, (client) => client.id)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'id' })
  client: Client;

  @Column()
  activity: string;

  @Column({ default: false })
  activity_main: boolean;

  @Column({ nullable: true, name: 'activity_type_id' })
  activity_type_id: number;

  @ManyToOne(() => ActivityType, (activity_type) => activity_type.id)
  @JoinColumn({ name: 'activity_type_id', referencedColumnName: 'id' })
  activity_type: ActivityType;

  @Column({ nullable: true, name: 'activity_frecuency_id' })
  activity_frecuency_id: number;

  @ManyToOne(
    () => ActivityFrecuency,
    (activity_frecuency) => activity_frecuency.id,
  )
  @JoinColumn({ name: 'activity_frecuency_id', referencedColumnName: 'id' })
  activity_frecuency: ActivityFrecuency;

  @Column({ nullable: true })
  company: string;

  @Column({ nullable: true })
  incomes: number;

  @Column({ nullable: true })
  years_work: string;

  @Column({ nullable: true })
  days_work: string;

  @Column({ nullable: true })
  time_work: string;

  @Column({ nullable: true })
  comments: string;

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
