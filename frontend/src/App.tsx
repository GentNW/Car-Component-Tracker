import React from 'react';
import './App.css';
import Homepage from './Components/HomePage';
import { Route,Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import NewComponent from './Features/Component/NewComponent';
import DashLayout from './Components/DashLayout';
import EditComponent from './Features/Component/EditComponent';
import Welcome from './Features/Auth/Welcome';
import NewCar from './Features/Car/NewCar';
import EditCar from './Features/Car/EditCar';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
          <Route path = "dash" element={<DashLayout />}>
            <Route index element={<Welcome/>}/>
            <Route path='newcomp' element={<NewComponent/>}/>
            <Route path='editcomp' element={<EditComponent/>}/>
            <Route path='Addcar' element={<NewCar/>}/>
            <Route path='editcar' element={<EditCar/>}/>
          </Route>{/*end of Dash layout*/}
        </Route>{/*end of layout*/}
      </Routes>
    </>
  )
}

export default App;
