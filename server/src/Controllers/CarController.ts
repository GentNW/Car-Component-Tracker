import { AppDataSource } from '../data-source';
import { Car } from '../Entities/Car';
import { Component } from '../Entities/Component';
import { Request, Response } from 'express';



//Create
export const createCar = async (req:Request,res:Response) =>{
    const { OwnerID,CarModel, Mileage,CarBrand, Component} = req.body

    const CarRepository = AppDataSource.getRepository(Car)
    
    const car = new Car()
    
    car.CarModel = CarModel
    car.Mileage = Mileage
    car.OwnerID = OwnerID
    car.CarBrand = CarBrand
    car.Components = Component
    try{
        const result = await CarRepository.save(car)
        if(!result){
            return res.status(400).json({ message: 'Invalid car-request data'})
        }
        else{
            return res.status(201).json({ message: 'Created car successfully!'})
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }

    
}

//Reads all cars
export const getCars = async (res:Response) =>{
    
    const CarRepository = AppDataSource.getRepository(Car)
    
    try{
        const result = await CarRepository.find()

        if(!result){
            return res.status(400).json({ message: 'No cars found!'})
        }
        else{
            return res.status(200).json({result})
        }
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}

//Reads by ID
export const getCar = async (req:Request,res:Response) =>{
    const {id}=req.params

    const CarRepository = AppDataSource.getRepository(Car)

    try{
        const result = await CarRepository.findOne({where: {id : parseInt(id,10)}}) //converting the string id to match the component id's type
        if(!result){
            return res.status(400).json({ message: 'Invalid car-request data'})
        }
        else{
            return res.status(200).json( result )
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}

//Reads all of the components by the same foreign key(car)
export const getCarComponents = async (req:Request,res:Response) =>{

    const {id} = req.params

    const ComponentRespository = AppDataSource.getRepository(Component)
    
    try{
        const result = await ComponentRespository.find({where: { id : parseInt(id,10)}}) //converting the string id to match the component id's type
        if(!result){
            return res.status(404).json({message: "No Components of car found!"})
        }else{
            return res.status(200).json({result})
        }
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
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
        const result = await CarRepository.update(parseInt(id,10),car ) //converting the string id to match the component id's type
        
        if (!result) {
            return res.status(404).json({ message: 'Car not found' });
          }
        else{
            return res.status(200).json({ message : "Updated car information successfully!" })
        }
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
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
            return res.status(200).json({message: "Car deleted!"});
        }
       
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}