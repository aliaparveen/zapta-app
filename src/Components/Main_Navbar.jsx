import React from 'react'
import "./Navbar.css"
import profile from "../images/p1.png"
const Main_Navbar = () => {
  return (
      <div className='Navbar_M'>
          <nav className="navbar bg-White">
        <div className="container-fluid">
          <a className="navbar-brand">My Recruitments</a>
          <img id="profile" src={profile} alt="" />
          
          
        </div>
      </nav>

    </div>
  )
}

export default Main_Navbar;