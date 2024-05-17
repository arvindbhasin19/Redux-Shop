import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { searchUser } from '../redux/userDetail/userDetailSlice'

export default function Navbar() {
  const allUsers = useSelector((state)=>state.userDetail.user)
  const [findUser, setFindUser] = useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(searchUser(findUser))
  },[findUser, dispatch])

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">CRUD</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Create Post</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/allPosts">All Posts ({allUsers.length})</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" onChange={(e)=>{setFindUser(e.target.value)}} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-sm btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav></>
  )
}
