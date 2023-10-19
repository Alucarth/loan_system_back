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
import { GuarantyType } from '../guaranty_type/guaranty_type.entity';
import { QuotaType } from '../quota_type/quota_type.entity';
import { Account } from '../account/account.entity';
import { User } from '../user/user.entity';
import { Currency } from '../currency/currency.entity';
import { CreditType } from '../credit_type/credit_type.entity';
@Index(['public_id', 'account_id'], { unique: true })
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  rate: number;

  @Column()
  rate_min: number;

  @Column()
  rate_max: number;

  @Column()
  amount_min: number;

  @Column()
  amount_max: number;

  //referencia al guaranty_type_id
  @Column({ name: 'credit_type_id' })
  credit_type_id: number;

  @ManyToOne(() => CreditType, (credit_type) => credit_type.id)
  @JoinColumn({ name: 'credit_type_id', referencedColumnName: 'id' })
  credit_type: CreditType;

  //referencia al guaranty_type_id
  @Column({ name: 'currency_id' })
  currency_id: number;

  @ManyToOne(() => Currency, (currency) => currency.id)
  @JoinColumn({ name: 'currency_id', referencedColumnName: 'id' })
  currency: Currency;

  //referencia al guaranty_type_id
  @Column({ name: 'guaranty_type_id' })
  guaranty_type_id: number;

  @ManyToOne(() => GuarantyType, (guaranty_type) => guaranty_type.id)
  @JoinColumn({ name: 'guaranty_type_id', referencedColumnName: 'id' })
  guaranty_type: GuarantyType;

  //referencia al quota_type_id
  @Column({ name: 'quota_type_id' })
  quota_type_id: number;

  @ManyToOne(() => QuotaType, (quota_type) => quota_type.id)
  @JoinColumn({ name: 'quota_type_id', referencedColumnName: 'id' })
  quota_type: QuotaType;

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
