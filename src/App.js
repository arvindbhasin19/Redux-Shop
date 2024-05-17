import React from 'react'
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'
import './App.css'
import { useSelector } from 'react-redux'

export default function App() {
  const mode = useSelector((state) => state.darkMode)
  

  if(mode==='light'){
    document.body.style.backgroundColor = '#fff';
  }
  else{
    document.body.style.backgroundColor = 'rgb(81 80 80)';
  }
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/cartPage' element={<CartPage/>} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

