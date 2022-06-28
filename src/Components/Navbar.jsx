import React from 'react'
import "./Navbar.css";
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
function Navbar() {
  return (
      <div className='Navbar'>
       < nav className="navbar navbar-expand-lg navbar-light bg-light">
      
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to="active">Active</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Archive</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Draft</a>
            </li>
        </ul>
        <div className="create_newrs">
           <Link className="create_newrs" to="New_Recuriment">Create New Recruitment</Link>
          
        </div>
      </nav>  
     
    </div>
  )
}

export default Navbar