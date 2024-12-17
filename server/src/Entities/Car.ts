import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { User } from './User'
import { Component } from './Component'
@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User, user => user.CarUserID)
    OwnerID!: User[]

    @OneToMany(() => Component, component => component.Car, {cascade: true})
    Components: Component[]

    @Column({type: "varchar", length:255})
    CarModel!: string

    @Column({type: "varchar", length:255})
    CarBrand!: string

    @Column('int')
    Mileage!: number
}