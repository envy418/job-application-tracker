import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-bar">
        <NavLink className='nav' to={""}>home</NavLink>
        <NavLink className='nav' to={"/job/create"}>create Job</NavLink>
        <NavLink className='nav' to={"job"}> Job</NavLink>
    </nav>
  )
}

export default Navbar
