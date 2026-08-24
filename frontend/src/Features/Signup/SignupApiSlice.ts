import { apiSlicenoauth } from "../../App/api/ApiSliceNoAuth"

export const RegisterApiSlice = apiSlicenoauth.injectEndpoints({
    endpoints: builder => ({
        AddNewUsers: builder.mutation({
                query: initialUserData =>({
                    url: 'api/user',
                    method:'POST',
                    body: {
                        ...initialUserData
                    }
                }),
                invalidatesTags:[
                    { type: 'User', id: "LIST"}
                ]
        })
    })
})
export const {
    useAddNewUsersMutation
} = RegisterApiSlice

export const RegisterApiReducer = RegisterApiSlice.reducer