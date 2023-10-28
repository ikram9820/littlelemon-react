import React from 'react'
import logo from '../assets/logo.png'
function Nav() {
  return (
    <nav>
      <img src={logo} height={30} alt='little lemon logo' />
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservation</a></li>
        <li><a href="">Order Diner</a></li>
        <li><a href="">Login</a></li>
      </ul>
      
    </nav>
  )
}

export default Nav
