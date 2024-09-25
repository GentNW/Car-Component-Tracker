import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/ApiSlice"
import { apiSlicenoauth } from "./api/ApiSliceNoAuth"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from '../Features/Auth/AuthSlice'
import {carsApiReducer} from '../Features/Car/CarApiSlice'
//import componentsreducer from from '../Features/Component/ComponentApiSlice'
//reducers for each table in the database
export type RootState = {
    [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>
    [apiSlicenoauth.reducerPath]: ReturnType<typeof apiSlicenoauth.reducer>
    auth: ReturnType<typeof authReducer>
    cars: ReturnType<typeof carsApiReducer>
    //components: ReturnType<typeof componentsreducer>
};
//Adding reducer paths
//apiSlicenoauth is for the apislice that does not need authentiction to send an api request i.e(register)
//apiSlice requires credentials and a token in its header to allow for api requests
export const Store = configureStore({
  reducer: { 
    [apiSlicenoauth.reducerPath]: apiSlicenoauth.reducer, 
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cars:carsApiReducer,
    //components: componentsApiReducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware()
    .concat(apiSlice.middleware),
    
    devTools: false
})
setupListeners(Store.dispatch)