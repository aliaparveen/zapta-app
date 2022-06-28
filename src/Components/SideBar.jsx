import React from 'react';
import Side_logo from '../images/side_logo.png'
import top_logo from "../images/31.png"
import side_list from "../images/side_list.png"
import './Navbar.css';
function SideBar() {
  return (
      <div className='side_bar'>
          <img id='top_logo' src={top_logo} alt="top logo" />
          <li> <img id='list-bar' src={side_list} alt="" /></li>
          
          <img id='b-logo' src={Side_logo} alt="mylogo" />

    </div>
  )
}

export default SideBar;