import React from 'react'
import {Outlet, NavLink } from 'react-router-dom'
import '../StylingComponent/Styling.css'

function Navbar() {
  return (
    <>
    <div className='container1'>
      <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/student'>Student</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact Us</NavLink>
            </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
    </>
  )
}

export default Navbar;
