//import { useSelector } from 'react-redux'
//import { selectAllComponents } from '../Component/ComponentsApiSlice'
import EditCarForm from './EditCarForm'


const EditCar = () => {
  //const Components = useSelector(selectAllComponents)

  //const content = Components ? <EditComponentForm Components={Components}/> : <p> Loading... </p>
  const content = <EditCarForm /> 
  return content
}

export default EditCar