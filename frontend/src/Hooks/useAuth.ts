import { useSelector } from 'react-redux'
import {selectCurrentToken} from '../Features/Auth/AuthSlice'
import {jwtDecode} from 'jwt-decode'
import {CustomJwtPayload} from './CustomJwtPayloadInterface';
 

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    // let isUser = false
    // let isAdmin = false
    // let status = "User"
    
    if(token){
        const decoded = jwtDecode<CustomJwtPayload>(token)

        const {CarUserID,UserName,CarsOwned} = decoded.UserInfo

        // isUser = roles.includes("User")
        // isAdmin = roles.includes("Admin")

        // if(isUser) status = "User"
        // if(isAdmin) status = "Admin"


        return {CarUserID,UserName,CarsOwned,isLoggedIn: true}
    }

    return {CarUserID: null ,UserName: '',CarsOwned: 0 ,isLoggedIn: false}
}
export default useAuth