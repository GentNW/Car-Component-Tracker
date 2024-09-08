//import { useSelector } from 'react-redux'
//import { selectAllComponents } from '../Component/ComponentsApiSlice'
import EditComponentForm from './EditComponentForm'


const EditComponent = () => {
  //const Components = useSelector(selectAllComponents)

  //const content = Components ? <EditComponentForm Components={Components}/> : <p> Loading... </p>
  const content = <EditComponentForm /> 
  return content
}

export default EditComponent