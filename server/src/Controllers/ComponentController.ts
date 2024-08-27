import { Request, Response } from 'express';
import pool from '../db'

//Create
export const createComponent = async (req:Request,res:Response) =>{
    const { CarID,ComponentName,ChangeDate, MileageOnChange,CurrentMileage} = req.body

    try{
        const result = await pool.query(
            'INSERT INTO Component (CarID,ComponentName,ChangeDate,MileageOnChange,CurrentMileage) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [CarID,ComponentName,ChangeDate,MileageOnChange,CurrentMileage]
        )
        res.status(201).json(result.rows[0])
    } catch(err){
        res.status(500).json({ error:err.message})
    }
}

//Read
export const getComponents = async (req:Request,res:Response) =>{
    try{
        const result = await pool.query(
            'SELECT * FROM Component'
        )
        res.status(200).json(result.rows)
    } catch(err){
        res.status(500).json({error:err.message})
    }
}

//Update
export const updateComponent = async (req:Request,res:Response) =>{
    const {ID} = req.params
    const { ComponentName,ChangeDate,MileageOnChange,CurrentMileage} = req.body

    try{
        const result = await pool.query(
            'UPDATE Component ComponentName=$1 ChangeDate=$2 MileageOnChange=$3 CurrentMileage=$4 WHERE ID=$5 RETURNING *',
            [ComponentName,ChangeDate,MileageOnChange,CurrentMileage,ID]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Component not found' });
          }
        res.status(201).json(result.rows[0])
    } catch(err){
        res.status(500).json({ error:err.message})
    }
}

//Delete
export const deleteComponent = async (req:Request, res:Response) =>{
    const {ID} = req.params
    
    try{
        const result = await pool.query('DELETE FROM Component WHERE ID = $1 RETURNING *',
            [ID]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Component not found' });
            }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}