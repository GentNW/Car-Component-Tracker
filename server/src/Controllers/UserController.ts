import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../Entities/User';
import bcrypt from 'bcrypt'
import { Car } from '../Entities/Car';
//Create
export const createUser = async (req:Request,res:Response) =>{
    const { UserName,Password, Email} = req.body

    if(!UserName||!Password||!Email){
        return res.status(400).json({ message: "All fields are required" })
    }

    const UserRepository = AppDataSource.getRepository(User)

    const user = new User()

    try{

        const salt = await bcrypt.genSalt(10) // generates a salt with a set amount of rounds
        const hashedPassword = await bcrypt.hash(Password,salt) //Uses the salt to encrypt the password into hash strings

        user.UserName = UserName
        user.Password = hashedPassword
        user.Email = Email

        const result = await UserRepository.save(user)
        if(!result){
            return res.status(400).json({ message: "Invalid user creation data"})
        }else{
            return res.status(201).json({ message: "User created successfully!", user: result})
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}

//Read all
export const getUsers = async (res:Response) =>{
    
    const UserRepository = AppDataSource.getRepository(User)

    try{
        const result = await UserRepository.find()
        if(!result){
            return res.status(400).json({ message: "No users found"})
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


//Read by id
export const getUser = async (req:Request,res:Response) =>{
    
    const {CarUserID} = req.params
    
    const UserRepository = AppDataSource.getRepository(User)

    try{
        const result = await UserRepository.findOne({where: {CarUserID : parseInt(CarUserID,10)}})
        if(!result){
            return res.status(404).json({ message: "User not found"})
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

//Read cars of certain user
export const getUserCars = async (req:Request,res:Response) =>{
    
    const {id} = req.params
    
    const CarRepository = AppDataSource.getRepository(Car)

    const UserRepository = AppDataSource.getRepository(User)


    try{

        let myowner = await UserRepository.findOne({where: {CarUserID: parseInt(id,10)}})
    
        //Makes sure the myowner variable is not null
        if(!myowner){
            return res.status(404).json({ message: "User not found"})
        }

        const result = await CarRepository.find({where: {Owner : myowner}})
        if(!result){
            return res.status(404).json({ message: "User cars not found"})
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


//Update
export const updateUser = async (req:Request,res:Response) =>{
    const {CarUserID} = req.params
    const { UserName,Password,CarsOwned} = req.body

    const UserRepository = AppDataSource.getRepository(User)

    const user = new User()

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(Password,salt)

        user.UserName = UserName
        user.Password = hashedPassword
        user.CarsOwned = CarsOwned

        const result = await UserRepository.update({CarUserID:parseInt(CarUserID,10)},user)
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
          }
        else{
            return res.status(201).json({ message: 'Updated user', result })
        }
       
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}

//Delete
export const deleteUser = async (req:Request, res:Response) =>{
    const {CarUserID} = req.params
    
    const UserRepository = AppDataSource.getRepository(User)

    const use = await UserRepository.findOne({where: {CarUserID:parseInt(CarUserID,10)}})
    let user  = use?.UserName

    try{
        const result = await UserRepository.delete({CarUserID: parseInt(CarUserID,10)})
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }else{
            return res.status(200).json({message: ` user: ${user} has been deleted successfully!` });
        }
        
    } catch(err:unknown){
        if(err instanceof Error)
        {
            return res.status(500).json(err.message)
        }
        
    }
}