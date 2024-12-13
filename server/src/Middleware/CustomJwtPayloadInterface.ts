import { JwtPayload } from 'jsonwebtoken';
import { UserInfo } from '../Controllers/UserInfoInterface';

export interface CustomJwtPayload extends JwtPayload {
    UserInfo: UserInfo;
}