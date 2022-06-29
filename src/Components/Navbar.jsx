import React from 'react'
import "./Navbar.css";
import {
  useNavigate
,
  Link
  
} from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
      <div className='Navbar'>
       < nav className="navbar navbar-expand-lg navbar-light bg-light">
      
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to="active">Active</Link>
            </li>
            <li className="nav-item">
            < Link className="nav-link" to="/">Archive</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Draft</Link>
            </li>
        </ul>
        <div className="create_newrs">
           <button className='btn btn-success'  onClick={()=>navigate('New_Recuriment')}>Create New Recruitment</button>
          
        </div>
      </nav>  
     
    </div>
  )
}

export default Navbar