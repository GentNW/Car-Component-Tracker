// import { useSelector } from 'react-redux'
// import {selectCurrentToken} from '../Features/Auth/AuthSlice'
// import {jwtDecode} from 'jwt-decode'
// import {CustomJwtPayload} from '../../../server/src/Middleware/CustomJwtPayloadInterface';
 

// const useAuth = () => {
//     const token = useSelector(selectCurrentToken)
//     let isUser = false
//     let isAdmin = false
//     let status = "User"
    
//     if(token){
//         const decoded = jwtDecode<CustomJwtPayload>(token)
//         const {id,username, roles } = decoded.UserInfo

//         isUser = roles.includes("User")
//         isAdmin = roles.includes("Admin")

//         if(isUser) status = "User"
//         if(isAdmin) status = "Admin"


//         return {id,username,roles,status,isUser, isAdmin}
//     }

//     return {username:'',roles: [],isUser,isAdmin,status }
// }
// export default useAuth