import React from 'react'
import Product from '../components/Product'
import { useSelector } from 'react-redux'

export default function Shop() {
    const mode = useSelector((state) => state.darkMode)
    
  return (
    <div className='row'>
        <h2 className={`text-center text-${mode==='light'?'dark':'light'} m-3`}>DashBoard</h2>
        <Product/>
    </div>
  )
}
