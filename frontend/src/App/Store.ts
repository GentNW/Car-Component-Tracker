import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/ApiSlice"
import { apiSlicenoauth } from "./api/ApiSliceNoAuth"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from '../Features/Auth/AuthSlice'
export type RootState = {
    [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
    [apiSlicenoauth.reducerPath]: ReturnType<typeof apiSlicenoauth.reducer>;
    auth: ReturnType<typeof authReducer>;
};
export const Store = configureStore({
  reducer: { 
    [apiSlicenoauth.reducerPath]: apiSlicenoauth.reducer, 
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware()
    .concat(apiSlice.middleware),
    
    devTools: false
})

setupListeners(Store.dispatch)