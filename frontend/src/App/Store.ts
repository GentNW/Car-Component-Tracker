import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/ApiSlice"
import { apiSlicenoauth } from "./api/ApiSliceNoAuth"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from '../Features/Auth/AuthSlice'
import {carsApiReducer} from '../Features/Car/CarApiSlice'
//import {componentsreducer} from '../Features/Component/ComponentApiSlice'
import { RegisterApiReducer } from "../Features/Signup/SignupApiSlice"
//reducers for each table in the database
export type RootState = {
    [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>
    [apiSlicenoauth.reducerPath]: ReturnType<typeof apiSlicenoauth.reducer>
    auth: ReturnType<typeof authReducer>
    cars: ReturnType<typeof carsApiReducer>
    //components: ReturnType<typeof componentsreducer>
    users: ReturnType<typeof RegisterApiReducer>
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
    users: RegisterApiReducer
    //components: componentsApiReducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware()
    .concat(apiSlice.middleware)
    .concat(apiSlicenoauth.middleware),
    
    devTools: false
})
setupListeners(Store.dispatch)