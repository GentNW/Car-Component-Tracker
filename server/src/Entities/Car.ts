import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'
@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    ID!: number

    @ManyToOne(() => User, user => user.CarUserID)
    OwnerID!: User[]

    @Column({type: "varchar", length:255})
    CarModel!: string

    @Column('int')
    Mileage!: number
}