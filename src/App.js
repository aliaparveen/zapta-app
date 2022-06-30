import react from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Main_Navbar from './Components/Main_Navbar';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import {
  Routes,
  Route,
  
} from "react-router-dom";
import New_Recuriment  from './Components/New_Recuriment';
// import Footer from './Components/Footer';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Main_Navbar />
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="New_Recuriment" element={<New_Recuriment />} />
        <Route path="active/New_Recuriment" element={<New_Recuriment />} />
        <Route path="/edit-table_data/:id" element={<New_Recuriment/>} />
        <Route path="active" element={<Table />} />
  
    </Routes>
      {/* <New_Recuriment/> */}
       <Footer/>
    </div>
  );
}

export default App;
