import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { changeMode } from '../redux/Darkmode/darkModeSlice'

export default function Navbar() {
    const mode = useSelector((state) => state.darkMode)
    const dispatch = useDispatch()

    const modeToggler = ()=>{
        dispatch(changeMode())
    }

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Redux Shop</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Produts</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={modeToggler} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  
</div>
      <div className="mx-2" >
    <Cart/>
    </div>
    </div>
    
  </div>
</nav>
    </>
  )
}
