import{
    createSelector,
    createEntityAdapter,
    EntityState
} from "@reduxjs/toolkit"

import { apiSlice } from "../../App/api/ApiSlice"
import { Store } from "../../App/Store";
import { RootState } from "../../App/Store";





//The Car Entity
export interface Car {
    id: number;
    Owner: number;
    CarModel: string;
    CarBrand: string;
    Mileage: number;
}

const CarsAdapter = createEntityAdapter<Car>({});

const initialState = CarsAdapter.getInitialState();

export const carsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCars: builder.query({
            query: () => ({
                url: 'api/cars',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:Car[]) => {
                const loadedCars = responseData.map(car => {
                    return car
                });
                return CarsAdapter.setAll(initialState,loadedCars)
                
            },
            providesTags: (result, error, arg) => {
                if (result?.ids?.length) {
                    return [
                        { type: 'Car', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Car' as const, id:Number(id) }))
                    ];
                } else return [{ type: 'Car', id: 'LIST' }];
            },
        }),
        
        getCar: builder.query({
            query: () => ({
                url: 'api/car/:id',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:Car[]) => {
                const loadedCar = responseData.map(car => {
                    return car
                });
                return CarsAdapter.setAll(initialState,loadedCar)
                
            },
            providesTags: (result, error, arg) => {
                if (result?.ids?.length) {
                    return [
                        { type: 'Car', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Car' as const, id:Number(id) }))
                    ];
                } else return [{ type: 'Car', id: 'LIST' }];
            },
        }),

        getCarComponents: builder.query({
            query: (id:number) => ({
            url: `api/car/${id}/components`,
            validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:Car[]) => {
                const loadedCar = responseData.map(car => {
                    return car
                });
                return CarsAdapter.setAll(initialState,loadedCar)
                
            },
            providesTags: (result, error, arg) => {
                if (result?.ids?.length) {
                    return [
                        { type: 'Car', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Car' as const, id:Number(id) }))
                    ];
                } else return [{ type: 'Car', id: 'LIST' }];
            },
        }),


        AddNewCars: builder.mutation({
                query: initialBlogData =>({
                    url: 'api/cars',
                    method:'POST',
                    body: {
                        ...initialBlogData
                    }
                }),
                invalidatesTags:[
                    { type: 'Car', id: "LIST"}
                ]
        }),

        UpdateCar: builder.mutation({
            query: initialBlogData =>({
                url: 'api/cars',
                method:'PATCH',
                body: {
                    ...initialBlogData
                }
            }),
            invalidatesTags:(result,error,arg) => [
                { type: 'Car', id: arg.id}
            ]
        }),
        
        DeleteCar: builder.mutation({
            query: ({ id }) =>({
                url: 'api/cars',
                method:'DELETE',
                body: { id }
            }),
            invalidatesTags:(result,error,arg) => [
                { type: 'Car', id: arg.id}
            ]
        })
    }),
})

export const {
    useGetCarsQuery,
    useAddNewCarsMutation,
    useUpdateCarMutation,
    useDeleteCarMutation,
} = carsApiSlice

// returns the query result object
export const selectCarResult =carsApiSlice.endpoints.getCars.select({})

// creates memoized selector 
const selectCarsData = createSelector(
    selectCarResult,
    carsResult => carsResult.data ?? [] //in order to prevent an error
)

export const carsApiReducer = carsApiSlice.reducer