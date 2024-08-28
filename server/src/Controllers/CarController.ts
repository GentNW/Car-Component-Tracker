import { Request, Response } from 'express';
import pool from '../db'

//Create
export const createCar = async (req:Request,res:Response) =>{
    const { OwnerID,CarModel, Mileage} = req.body

    try{
        const result = await pool.query(
            'INSERT INTO Car (OwnerID,CarModel,Mileage) VALUES ($1,$2,$3) RETURNING *',
            [OwnerID,CarModel,Mileage]
        )
        res.status(201).json(result.rows[0])
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}

//Read
export const getCars = async (req:Request,res:Response) =>{
    try{
        const result = await pool.query(
            'SELECT * FROM Car'
        )
        res.status(200).json(result.rows)
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}

//Update
export const updateCar = async (req:Request,res:Response) =>{
    const {ID} = req.params
    const { CarModel, Mileage} = req.body

    try{
        const result = await pool.query(
            'UPDATE Component CarModel=$1 Mileage=$2 WHERE ID=$3 RETURNING *',
            [CarModel, Mileage,ID]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Component not found' });
          }
        res.status(201).json(result.rows[0])
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}

//Delete
export const deleteCar = async (req:Request, res:Response) =>{
    const {ID} = req.params
    
    try{
        const result = await pool.query('DELETE FROM Car WHERE ID = $1 RETURNING *',
            [ID]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Car not found' });
            }
        res.status(200).json(result.rows[0]);
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}