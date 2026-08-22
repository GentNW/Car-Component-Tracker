import jwt from 'jsonwebtoken';
const asyncHandler = require('express-async-handler')
import { Request, Response } from "express";
import { AppDataSource } from '../data-source';
import { issueRefreshToken,validateRefreshToken } from './RefreshTokenController';
import { User } from '../Entities/User';


// @desc Login
// @route Post /auth
//@access Public
const login =  asyncHandler(async(req: Request,res:Response) => {
    //authenticate user
    const user = req.body as User
    const userRepository = AppDataSource.getRepository(User)

    if(!user.UserName||!user.Password){
        return res.status(400).json({ message: 'All fields are required' })
    }
    const { accessToken , refreshToken, REFRESH_TOKEN_EXPIRATION, token } = await issueRefreshToken(user)
    //Create cookie with refresh token
    res.cookie('jwt',refreshToken,{
        httpOnly: true, //only accessible by web server
        secure:true, //https
        sameSite: 'none', //cross-site cookies
        maxAge: REFRESH_TOKEN_EXPIRATION *1000 //Cookie expiry should match refresh token's expiration time

    })


    // saving the refresh token in the database
    user.refreshTokens.push(token)
    await userRepository.save(user)
    // Sending access token and refresh token 
    //res.json({ accessToken })
    res.status(200).json({ accessToken, refreshToken });
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
    // Verifying the refresh token using async/await (Promise-based)
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