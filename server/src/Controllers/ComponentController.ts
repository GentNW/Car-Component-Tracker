import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Component } from '../Entities/Component';
import { Car } from '../Entities/Car';

//Create
export const createComponent = async (req:Request,res:Response) =>{
    const {CarID,ComponentName,ChangeDate, MileageOnChange} = req.body

   
    //Fetching the Component's Car to attach it upon creation
    const CarRepository = AppDataSource.getRepository(Car)

    const car = await CarRepository.findOne(CarID);

    if(!car){
        return res.status(404).json({message:"Car not found"})
    }
    
    //Creating the component
    const ComponentRespository = AppDataSource.getRepository(Component)

    const component = new Component

    component.Car = car
    component.ChangeDate = ChangeDate
    component.ComponentName = ComponentName
    component.MileageOnChange = MileageOnChange


    try{
        const result = await ComponentRespository.save(component)
        if(!result){
           return res.status(400).json({message: "Invalid Component-request data"})
        }else{
           return res.status(201).json({message: "Component created successfully!"})// Created
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
           return res.status(500).json(err.message) //In case of server error
        }
        
    }
}

//Reads all components generally
export const getComponents = async (res:Response) =>{

    const ComponentRespository = AppDataSource.getRepository(Component)
    
    try{
        const result = await ComponentRespository.find()
        if(!result){
            return res.status(404).json({message: "No Components found!"})
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

//Reads by id
export const getComponentByID = async (req:Request,res:Response) =>{

    const {id} = req.params

    const ComponentRespository = AppDataSource.getRepository(Component)
    
    try{
        const result = await ComponentRespository.findOne({where: {id : parseInt(id,10)}}) //converting the string id to match the component id's type
        if(!result){
            return res.status(404).json({message: "Component not found!"})
        }else{
            return res.status(200).json(result)
        }
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}

//Updates
export const updateComponent = async (req:Request,res:Response) =>{
    const { ComponentName,ChangeDate,MileageOnChange} = req.body

    const ComponentRespository = AppDataSource.getRepository(Component)

    const component = new Component
    component.ChangeDate = ChangeDate
    component.ComponentName = ComponentName
    component.MileageOnChange = MileageOnChange
    try{
        const result = ComponentRespository.save(component)
        if (!result) {
            return res.status(404).json({ message: 'Component not found' });
        }else{
            return res.status(200).json({message: "Component updated successfully!"})
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}

//Delete
export const deleteComponent = async (req:Request, res:Response) =>{
    const {id} = req.params
    
    const ComponentRespository = AppDataSource.getRepository(Component)

    try{
        const result = await ComponentRespository.findOne({where: {id: parseInt(id,10)}}) //converting the string id to match the component id's type
        if (result) {
            return res.status(404).json({ message: 'Component not found' });
        }else{
            return res.status(200).json({message: 'Component deleted successfully!'});
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}