import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuerynoAuth =  fetchBaseQuery({baseUrl: 'http://localhost:5000'})

export const apiSlicenoauth= createApi({
    baseQuery: baseQuerynoAuth,
    reducerPath: 'NoAuthApi',
    tagTypes: ['User'],
    endpoints: builder => ({})
})