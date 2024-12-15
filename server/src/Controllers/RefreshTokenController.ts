import { AppDataSource } from '../data-source';
import { RefreshToken } from '../Entities/RefreshToken'; 
import { User } from '../Entities/User';
import jwt  from 'jsonwebtoken';
import { CustomJwtPayload } from '../Middleware/CustomJwtPayloadInterface';


//Create a refresh token
export const issueRefreshToken = async (user: User) => {
  const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);

  const token = new RefreshToken();
  
  const REFRESH_TOKEN_EXPIRATION = 24 * 60 * 60;

  //Token Creation
  //Access token
  const accessToken = jwt.sign({
        UserInfo: {
            UserName: user.UserName,
            CarUserID:user.CarUserID
        },
        
    } as CustomJwtPayload,
    process.env.ACCESS_TOKEN_SECRET as string, // Access token is typed as string
    { expiresIn: '15m'} // Access Token's lifetime is 15 minutes
  )

  //Refresh token
  const refreshToken = jwt.sign(
    {id: user.CarUserID},
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: REFRESH_TOKEN_EXPIRATION}
  )


  //Storing Refresh token info
  token.refresh_token = refreshToken
  token.user = user
  token.created_at = new Date()
  token.expires_at = new Date(token.created_at.getTime() + REFRESH_TOKEN_EXPIRATION * 1000)
  
  
  await refreshTokenRepository.save(token)
  return {accessToken,refreshToken,REFRESH_TOKEN_EXPIRATION,token}
}

//Find a refresh token by its value
export const getRefreshTokenByToken = async (token: string) => {
  const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);

  return await refreshTokenRepository.findOne({
    where: { refresh_token: token },
    relations: ['user'],
  });
};

//Checks refresh token's validity
export const validateRefreshToken = async (refreshToken: string): Promise<CustomJwtPayload | null> =>{
  try{
    const decoded =jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as CustomJwtPayload

    const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);
    const tokenRecord = await refreshTokenRepository.findOne({
      where: { refresh_token: refreshToken, user: {CarUserID:decoded.UserInfo.CarUserID}},
    })

    if(!tokenRecord || tokenRecord.is_deleted){
      return null
    }

    //Returns the validated refresh token
    return decoded
  } catch(err:unknown){
    return null
  }
}

//Delete a refresh token by its value
export const revokeRefreshToken = async (token: string) => {
  const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);
  const refreshToken = await refreshTokenRepository.findOne({ where: { refresh_token: token } });

  if (refreshToken) {
    await refreshTokenRepository.remove(refreshToken);
  }
};
