import { AppDataSource } from '../data-source';
import { Car } from '../Entities/Car';
import { Request, Response } from 'express';
import pool from '../db'
import { where } from 'sequelize';


//Create
export const createCar = async (req:Request,res:Response) =>{
    const { OwnerID,CarModel, Mileage,CarBrand} = req.body

    const CarRepository = AppDataSource.getRepository(Car)
    
    const car = new Car()
    
    car.CarModel = CarModel
    car.Mileage = Mileage
    car.OwnerID = OwnerID
    car.CarBrand = CarBrand

    try{
        const result = await CarRepository.save(car)
        if(!result){
            res.status(400).json({ message: 'Invalid request data'})
        }
        else{
            res.status(201).json({ message: 'Created car successfully!'})
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }

    
}

//Gets all cars
export const getCars = async (res:Response) =>{
    
    const CarRepository = AppDataSource.getRepository(Car)
    
    try{
        const result = await CarRepository.find()

        if(!result){
            res.status(400).json({ message: 'Invalid request data'})
        }
        else{
            res.status(201).json({ message: 'Fetched cars successfully!'})
        }
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}

//Reads by ID
export const getCar = async (req:Request,res:Response) =>{
    const {id}=req.params

    const CarRepository = AppDataSource.getRepository(Car)

    try{
        const result = await CarRepository.findOne({where: {id : parseInt(id,10)}})
        if(!result){
            res.status(400).json({ message: 'Invalid request data'})
        }
        else{
            res.status(201).json({ message: 'Fetched car successfully!'})
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}

//Updates
export const updateCar = async (req:Request,res:Response) =>{
    const {id} = req.params
    const { CarModel, Mileage,CarBrand} = req.body

    const CarRepository = AppDataSource.getRepository(Car)
    
    const car = new Car()

    car.CarBrand = CarBrand
    car.CarModel = CarModel
    car.Mileage = Mileage
    try{
        const result = await CarRepository.update(parseInt(id,10),car )
        
        if (!result) {
            return res.status(404).json({ message: 'Car not found' });
          }
        else{
        res.status(201).json({ message : "Updated information successfully!" })
        }
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}

//Deletes(by ID)
export const deleteCar = async (req:Request, res:Response) =>{
    const {id} = req.params
    const CarRepository = AppDataSource.getRepository(Car)
    try{
        const result = await CarRepository.delete(id)
        if (!result) {
            return res.status(404).json({ message: 'Car not found' });
            }
        else{
            res.status(200).json({message: "Car deleted!"});
        }
       
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}