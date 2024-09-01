import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,ManyToOne } from 'typeorm'
import { Car } from './Car'

@Entity()
export class Component{
    @PrimaryGeneratedColumn()
    ID!: number

    @ManyToOne(() => Car, car => car.ID)
    CarID!: Car[]
    
    @Column({type: "varchar", length:255})
    ComponentName!: string

    @Column({type: 'date'})
    ChangeDate!: Date

    @Column('int')
    MileageOnChange!: number
}