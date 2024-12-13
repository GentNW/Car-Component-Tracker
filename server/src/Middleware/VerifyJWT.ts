import { Request , Response, NextFunction} from 'express';
import { VerifyErrors } from 'jsonwebtoken';
import {CustomJwtPayload} from './CustomJwtPayloadInterface';
import { CustomRequest } from './CustomRequestInterface';
const jwt = require('jsonwebtoken')

const verifyJWT = (req:CustomRequest,res:Response,next:NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.authorization

    if(!authHeader?.startsWith('Bearer ')){
        return res.status(401).json({message:'Unauthorized'})
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string,
        (err:VerifyErrors | null, decoded: CustomJwtPayload | undefined) =>{
            if(err)
            { 
                return res.status(403).json({ message: 'Forbidden'})
            }


            if(decoded?.UserInfo)
            {
                req.user = decoded.UserInfo.username
                req.roles = decoded.UserInfo.roles
                //res.userId = decoded.UserInfo.id
            }
            else
            {
                return res.status(403).json({message: 'Invalid Token'})
            }
            
            next() //next middleware or controller
        }
        
    )
}

module.exports = verifyJWT