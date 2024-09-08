import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/HomePage';
import { Route,Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import NewComponent from './Features/Component/NewComponent';
import DashLayout from './Components/DashLayout';
import EditComponent from './Features/Component/EditComponent';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path = "dash" element={<DashLayout />}>
            <Route index element={<Homepage/>}/>
            <Route path='newcomp' element={<NewComponent/>}/>
            <Route path='editcomp' element={<EditComponent/>}/>
          </Route>{/*end of Dash layout*/}
        </Route>{/*end of layout*/}
      </Routes>
    </>
  )
}

export default App;
