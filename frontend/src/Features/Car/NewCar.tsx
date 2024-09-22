import { useSelector } from 'react-redux'
//import { selectAllComponents } from '../Component/ComponentsApiSlice'
import NewCarForm from './NewCarForm'


const NewCar = () => {
  //const Components = useSelector(selectAllComponents)

  //const content = Components ? <NewComponentForm Components={Components}/> : <p> Loading... </p>
  const content = <NewCarForm /> 
  return content
}

export default NewCar