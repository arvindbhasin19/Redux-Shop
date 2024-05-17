import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import ReadData from './components/ReadData'
import ViewUser from './components/ViewUser'
import EditData from './components/EditData'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/allPosts' element={<ReadData />} >
          <Route path='view/:id' element={<ViewUser />} />
          <Route path='edit/:id' element={<EditData />} />
        </Route>
        <Route exact path='/' element={<CreateUser />} />
        <Route path='*' element={<Navigate to='/' />} />

      </Routes>
    </BrowserRouter>
  )
}



