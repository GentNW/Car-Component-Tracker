import { Request, Response } from 'express';
import pool from '../db'

//Create
export const createUser = async (req:Request,res:Response) =>{
    const { UserName,Password,CarsOwned} = req.body

    try{
        const result = await pool.query(
            'INSERT INTO User (Username,Password,CarsOwned) VALUES ($1,$2,$3) RETURNING *',
            [UserName,Password,CarsOwned]
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
export const getUsers = async (req:Request,res:Response) =>{
    try{
        const result = await pool.query(
            'SELECT * FROM users'
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
export const updateUser = async (req:Request,res:Response) =>{
    const {CarUserID} = req.params
    const { UserName,Password,CarsOwned} = req.body

    try{
        const result = await pool.query(
            'UPDATE User Username=$1 Password=$2 CarsOwned=$3 WHERE CarUserID = $4',
            [UserName,Password,CarsOwned,CarUserID]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
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
export const deleteUser = async (req:Request, res:Response) =>{
    const {CarUserID} = req.params
    
    try{
        const result = await pool.query('DELETE FROM User WHERE CarUserID = $1 RETURNING *',
            [CarUserID]
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
            }
        res.status(200).json(result.rows[0]);
    } catch(err:unknown){
        if(err instanceof Error)
        {
            res.status(500).json(err.message)
        }
        
    }
}