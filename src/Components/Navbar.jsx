import React from 'react'
import "./Navbar.css";
function Navbar() {
  return (
      <div className='Navbar'>
       < nav className="navbar navbar-expand-lg navbar-light bg-light">
      
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Archive</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Draft</a>
            </li>
        </ul>
        <div className="create_newrs">
            <button  className='btn btn-success align-right' type="submit">Create New Recruitment</button>
        </div>
      </nav>  
     
    </div>
  )
}

export default Navbar