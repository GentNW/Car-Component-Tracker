import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, DeleteDateColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class RefreshToken {
  [x: number]: { CarUserID: number; };
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  refresh_token!: string;

  @ManyToOne(() => User, (user) => user.refreshTokens)
  user!: User;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column('timestamptz')
  expires_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
  token: { CarUserID: number; };
}
