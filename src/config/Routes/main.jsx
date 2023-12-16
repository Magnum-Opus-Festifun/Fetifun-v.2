// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages/main';


function Routers() {
  return (
  
    <Router>
      <Routes>
        <Route path='*' element={<MainApp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
    
  )
}

export default Routers