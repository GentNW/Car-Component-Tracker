const User = require('../models/user')
//const bcrypt = require('bcrypt')
import jwt from 'jsonwebtoken';
const asyncHandler = require('express-async-handler')
import { Request, Response } from "express";
import { VerifyErrors } from 'jsonwebtoken';
import { CustomJwtPayload } from '../Middleware/CustomJwtPayloadInterface';
import { AuthRequestBody } from "./AuthRequestBody";
import { CustomRequest } from '../Middleware/CustomRequestInterface';
import { JwtPayload } from 'jsonwebtoken';


// @desc Login
// @route Post /auth
//@access Public
const login =  asyncHandler(async(req: Request<{}, {}, AuthRequestBody>,res:Response) => {
    //authenticate user
    const{username,password} = req.body

    if(!username||!password){
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser =  await User.findOne({ username }).exec()

    if(!foundUser){
        return res.status(401).json({ message: 'Unauthorized' })
    }

    //Token Creation
    //Access token
    const accessToken = jwt.sign({
            UserInfo: {
                username: foundUser.username,
                roles: foundUser.roles,
                id: foundUser._id
            },
            
        } as CustomJwtPayload,
        process.env.ACCESS_TOKEN_SECRET as string, // Access token is typed as string
        { expiresIn: '15m'} // Access Token's lifetime is 15 minutes
    )

    //Refresh token
    const refreshToken = jwt.sign({
           UserInfo: {
                username: foundUser.username,
                roles: foundUser.roles,
                id: foundUser._id
            },
        } as CustomJwtPayload,
        process.env.REFRESH_TOKEN_SECRET as string,
        { expiresIn: '1d'}
    )

    //Create cookie with refresh token
    res.cookie('jwt',refreshToken,{
        httpOnly: true, //only accessible by web server
        secure:true, //https
        sameSite: 'none', //cross-site cookies
        maxAge: 7 * 24 * 60 * 60 *1000 //Cookie expiry should match refresh token's expiration time

    })

    // Send access token with the username and roles
    res.json({ accessToken })
})

// @desc refresh
// @route Get /auth/refresh
//@access Public - because access token has expired
const refresh = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const refreshToken = req.cookies.jwt;

  if (!refreshToken) {
    res.status(403).json({ message: 'Refresh Token Required' });
  }

  try {
    // Verifying the refresh token using async/await (Promise-based)
    const decoded = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as CustomJwtPayload;

    // Using the new access token after verification
    const newAccessToken = jwt.sign(
      { UserInfo: { username: decoded.UserInfo.username, roles: decoded.UserInfo.roles, id: decoded.UserInfo.id } },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: 'Invalid Refresh Token' });
  }
});

// @desc Login
// @route Post /auth/logout
//@access Public - clear cookie if it exists
const logout =  (req:Request,res:Response) => {
    const cookies  = req.cookies
    if(!cookies?.jwt){
        return res.sendStatus(204) // no content
    }

    res.clearCookie('jwt',{
        httpOnly:true,
        sameSite:'none',
        secure:true})

    res.json({message: "Cookie cleared"})
}

module.exports = {
    login,
    refresh,
    logout
}