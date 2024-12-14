import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm'
import { RefreshToken } from './RefreshToken';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    CarUserID!: number

    @Column({type: "varchar", length:255})
    UserName!: string

    @Column({type: "varchar", length:255})
    Password!: string

    @Column()
    CarsOwned!: number

    @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user)
    refreshTokens!: RefreshToken[]; 
}