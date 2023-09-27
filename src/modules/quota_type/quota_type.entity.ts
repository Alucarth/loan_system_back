import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuotaType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  payment_frequency: number;

  @Column()
  value: number;
  
  @Column()
  coin: number;

  @Column()
  state: boolean;
}
