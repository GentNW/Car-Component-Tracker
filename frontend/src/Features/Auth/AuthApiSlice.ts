import { apiSlice } from "../../App/api/ApiSlice";
import { logOut, setCredentials } from "./AuthSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        Login: builder.mutation({
            query: credentials => ({
                url: 'api/',
                method:'POST',
                body: {
                    ...credentials
                }
            })
        }),
        SendLogout: builder.mutation({
            query: () =>({
                url: 'api/auth/logout',
                method: 'POST'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled}){
                try{
                    //const {data} = await queryFulfilled
                    await queryFulfilled
                    //console.log(data)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000);
                } catch(err){
                    console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: () =>({
                url:'api/auth/refresh',
                method:'GET',
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}){
                try{
                    const { data } = await queryFulfilled
                    //console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({accessToken}))
                } catch(err){
                    console.log(err)
                }
            }
        })
    })
})

export const {
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
} = authApiSlice