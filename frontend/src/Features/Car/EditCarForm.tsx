import { useEffect, useState } from 'react';
import { useUpdateCarMutation } from './CarApiSlice';
import { useGetCarsQuery } from './CarApiSlice';


const EditCarForm = () =>{

    const [UpdateCar, {
            isLoading,
            isSuccess,
            isError,
            error
            }] = useUpdateCarMutation()
            const onUpdatedCarSubmit = async(e: { preventDefault: () => void; }) => { 
                e.preventDefault()
                await UpdateCar({Mileage})
            }           
    //Table columns
    //const [CarBrand,setCarBrand]= useState('')
    //const [CarModel,setCarModel] = useState('')
    const [Mileage, setMileage] = useState(0)

    //the selected component
    let CarNamePlaceholder: string ="CarNamePlaceholder"
    let CarBrandPlaceholder: string ="CarBrandPlaceholder"

    const content = (
    <>
        <form className='CompForm' onSubmit={onUpdatedCarSubmit}>
            <div className='CompContainer'>
                
                <label className="InputLabel">Car Brand</label>
                <label className='InputLabel'>{CarBrandPlaceholder}</label>  
                <br/>

                <label className="InputLabel">Car Model</label>
                <label className='InputLabel'>{CarNamePlaceholder}</label>
                <br/>

                <label className="InputLabel">Mileage</label>
                <input type="number" min="1" id="Mileage" name="Mileage" onChange={(e) => setMileage(Number(e.target.value))}/>
                <br/>
                
                <input type="submit" value="Submit"/>
            </div>
        </form>
    </>
    )
    return content
}

export default EditCarForm