import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

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
}