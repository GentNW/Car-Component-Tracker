import jwt from 'jsonwebtoken';
const asyncHandler = require('express-async-handler')
import { Request, Response } from "express";
import { AppDataSource } from '../data-source';
import { issueRefreshToken,validateRefreshToken } from './RefreshTokenController';
import { User } from '../Entities/User';
import bcrypt from 'bcrypt'

// @desc Login
// @route Post /auth
//@access Public
const login =  asyncHandler(async(req: Request,res:Response) => {
    //authenticates user
    const { UserName, Password} = req.body  

    //Field Check
    if(!UserName||!Password){
        return res.status(400).json({ message: 'All fields are required' })
    }
    const userRepository = AppDataSource.getRepository(User)
    const currUser = await userRepository.findOne({
      where: {UserName},
      relations: ['refreshTokens']
    })

    //Credential Check
    if (!currUser){
      return res.status(401).json({message:'Invalid Credentials'})
    }

    const passComp = await bcrypt.compare(Password, currUser.Password)
    if (!passComp){
      return res.status(401).json({message:'Invalid Credentials'})
    }

    const { accessToken , refreshToken, REFRESH_TOKEN_EXPIRATION, token } = await issueRefreshToken(currUser)
    //Create cookie with refresh token
    res.cookie('jwt',refreshToken,{
        httpOnly: true, //only accessible by web server
        secure:true, //https
        sameSite: 'none', //cross-site cookies
        maxAge: REFRESH_TOKEN_EXPIRATION *1000 //Cookie expiry should match refresh token's expiration time

    })


    // saving the refresh token in the database
    currUser.refreshTokens.push(token)
    await userRepository.save(currUser)
    // Sending access token only 
    res.status(200).json({ accessToken});
})

// @desc refresh
// @route Get /auth/refresh
//@access Public - because access token has expired
const refresh = asyncHandler(async (req: Request, res: Response) => {
  const refreshToken = req.cookies.jwt;

  if (!refreshToken) {
    return res.status(403).json({ message: 'Refresh Token Required' });
  }

  try {
    // Verifying the refresh token using async/await
    const decoded = await validateRefreshToken(refreshToken);

    if(!decoded){
      return res.status(403).json({ message: 'Invalid or revoked Refresh token'})
    }
    // Using the new access token after verification
    const newAccessToken = jwt.sign(
      { UserInfo: { username: decoded.UserInfo.UserName, id: decoded.UserInfo.CarUserID } },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: '15m' }
    );

    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(403).json({ message: 'Invalid Refresh Token' });
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