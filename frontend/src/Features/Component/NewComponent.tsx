import { useSelector } from 'react-redux'
//import { selectAllComponents } from '../Component/ComponentsApiSlice'
import NewComponentForm from './NewComponentForm'


const NewComponent = () => {
  //const Components = useSelector(selectAllComponents)

  //const content = Components ? <NewComponentForm Components={Components}/> : <p> Loading... </p>
  const content = <NewComponentForm /> 
  return content
}

export default NewComponent