import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../Features/Auth/AuthSlice'
import { RootState } from '../Store'
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
    credentials: 'include',
    prepareHeaders: (headers, {getState} ) => {
        //Obtaining the auth token if successful
        const currstate = getState() as RootState
        const token = currstate.auth.token
        //console.log({token})
        //setting auth header
        if(token){
            headers.set("authorization",`Bearer ${token}`)
        }
        
        return headers
    }
})
const baseQueryWithReauth = async (args: string | FetchArgs,api: BaseQueryApi,extraOptions: {}) =>{

    //console.log(args)
    //console.log(api)
    let result = await baseQuery(args,api,extraOptions)
    if(result?.error?.status === 403){
        console.log('sending Refresh token')


        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)

        if(refreshResult?.data){

            // Storing new token
            api.dispatch(setCredentials({...refreshResult.data}))

            // Retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        }else{
            if(refreshResult?.error?.status === 403){
                let errorData = refreshResult.error.data as { message: string }; 
                errorData.message = "Your login has expired. "
            }

            return refreshResult

        }
    }

    return result
}

export const apiSlice= createApi({
    baseQuery: baseQueryWithReauth,
    reducerPath: 'api',
    tagTypes: ['User','Car','Component'],
    endpoints: builder => ({})
})