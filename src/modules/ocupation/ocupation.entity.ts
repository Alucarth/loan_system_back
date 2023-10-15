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
import { Address } from '../address/address.entity';
import { User } from '../user/user.entity';

@Entity()
export class Ocupation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ocupation: string;

  @Column({ nullable: true })
  ocupation_type: string;

  @Column({ nullable: true })
  main_ocupation: string;

  @Column({ nullable: true })
  company_name: string;

  @Column({ nullable: true })
  work_them: string;

  @Column({ nullable: true })
  net_income: string;

  @Column({ nullable: true })
  periodicity_income: string;

  @Column({ nullable: true })
  workdays: number;

  @Column({ nullable: true })
  working_hours: number;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Address, (address) => address.ocupations)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
  address: Address;

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
