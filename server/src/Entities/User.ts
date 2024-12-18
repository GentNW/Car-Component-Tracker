import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm'
import { RefreshToken } from './RefreshToken';
import { Car } from './Car';

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

    @Column({type: "varchar", length:255})
    Email!: string

    @OneToMany(() => Car, (car) => car.Owner,{cascade: true})
    cars!:Car[]

    @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user)
    refreshTokens!: RefreshToken[]; 
}