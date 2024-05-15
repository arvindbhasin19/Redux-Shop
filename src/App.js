import React from 'react'
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './redux/API/apiCallSlice'

export default function App() {
  const mode = useSelector((state) => state.darkMode)
  // const api = useSelector((state)=>state.apiData);
  const dispatch = useDispatch()
  const fetchApi =()=>{
    dispatch(getData())
  }

  if(mode==='light'){
    document.body.style.backgroundColor = '#fff';
  }
  else{
    document.body.style.backgroundColor = 'rgb(81 80 80)';
  }
  return (
    <>
    <div className="container">
      <button onClick={fetchApi} className="btn btn-sm btn-dark m-3">Fetch API</button>
    </div>
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

