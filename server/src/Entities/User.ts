import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm'
import { refresh_token } from './refresh_token';
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

    @OneToMany(() => refresh_token, (refreshToken) => refreshToken.user)
    refreshTokens!: refresh_token[]; 
}