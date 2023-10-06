import { Person } from 'src/modules/person/person.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { UserRol } from '../user_rol/user_rol.entity';
import { ClientType } from '../client_type/client_type.entity';
import { CreditType } from '../credit_type/credit_type.entity';
import { GuarantyType } from '../guaranty_type/guaranty_type.entity';
import { PersonType } from '../person_type/person_type.entity';
import { QuotaType } from '../quota_type/quota_type.entity';
import { Account } from '../account/account.entity';
import { Ocupation } from '../ocupation/ocupation.entity';
import { Address } from '../address/address.entity';
import { Branch } from '../branch/branch.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string;

  @Column('text')
  password: string;

  @Column({ nullable: true })
  added_user_id: number;

  @Column({ nullable: true })
  deleted_user_id: number;

  @OneToMany(() => Person, person => person.user)
  @JoinColumn({ name: 'person_id' })
  persons: Person[];

  @OneToOne(() => UserRol, userRol => userRol.user)
  userRol: UserRol; // Agregado esta propiedad para la relacion con UserRol

  @OneToMany(() => ClientType, clientType => clientType.user)
  clientTypes: ClientType[]; // Agregado esta propiedad para la relacion con ClientType

  @OneToMany(() => CreditType, creditType => creditType.user)
  creditTypes: CreditType[]; // Agregado esta propiedad para la relacion con CreditType

  @OneToMany(() => GuarantyType, guarantyType => guarantyType.user)
  guarantyTypes: GuarantyType[]; // Agregado esta propiedad para la relacion con CreditType

  @OneToMany(() => PersonType, personType => personType.user)
  personTypes: PersonType[]; // Agregado esta propiedad para la relacion con CreditType

  @OneToMany(() => QuotaType, quotaType => quotaType.user)
  quotaTypes: QuotaType[]; // Agregado esta propiedad para la relacion con CreditType

  @OneToMany(() => Account, account => account.user)
  accounts: Account[]; // Agregado esta propiedad para la relacion con CreditType

  @OneToMany(() => Ocupation, ocupation => ocupation.user)
  ocupations: Ocupation[]; // Agregado esta propiedad para la relacion con CreditType

  @OneToMany(() => Address, address => address.user)
  addresses: Address[]; // Agregado esta propiedad para la relacion con CreditType

  @OneToMany(() => Branch, branch => branch.user)
  branches: Branch[]; // Agregado esta propiedad para la relacion con CreditType

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date

  @DeleteDateColumn()
  deleted_at: Date; // Deletion date
}
