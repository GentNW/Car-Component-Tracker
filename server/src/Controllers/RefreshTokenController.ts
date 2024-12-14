import { AppDataSource } from '../data-source';
import { RefreshToken } from '../Entities/RefreshToken'; 
import { User } from '../Entities/User';  

//Create a refresh token
const createRefreshToken = async (refreshToken: string, user: User, expiresAt: Date) => {
  const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);

  const token = new RefreshToken();
  token.refresh_token = refreshToken;
  token.user = user;
  token.expires_at = expiresAt;

  await refreshTokenRepository.save(token); 
  return token;
};

//Find a refresh token by its value
const getRefreshTokenByToken = async (token: string) => {
  const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);

  return await refreshTokenRepository.findOne({
    where: { refresh_token: token },
    relations: ['user'],  // Fetch the user relation as well
  });
};

//Delete a refresh token by its value
const deleteRefreshToken = async (token: string) => {
  const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);
  const refreshToken = await refreshTokenRepository.findOne({ where: { refresh_token: token } });

  if (refreshToken) {
    await refreshTokenRepository.remove(refreshToken);
  }
};
