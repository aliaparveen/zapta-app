import React from 'react';
import { useState } from 'react';
import { getlisttabledata, removetable_data } from "./Services/localstorage";
import {useNavigate} from "react-router-dom"
function Tablelist({ table_data, setlisttabledata }) {
  const navigate = useNavigate();
  //const [listtabledata, setlisttabledata] = useState([]);
  const { id, name, jobrole, employee_level, details } = table_data;
  const deletetable_data = () => {
    removetable_data(id);
    setlisttabledata(getlisttabledata());
  }
  return (
    
    <tr>
      <th >{name}</th>
      <td>{details}</td>
      <td>{jobrole}</td>
      <td>{employee_level}</td>
      <td ><select className="form-select " aria-label="Default select example">
        <option selected className='text-success'>In Progress</option>
      </select></td>
      <td>
        <div className='d-flex gap-2'>
          <span role="button" className='badge bg-success' onClick={() => navigate(`/edit-table-data/${id}`)}>Update</span>
          <span role="button" className='badge bg-danger' onClick={() => deletetable_data}>Delete</span>
          <span role="button" className='badge bg-info'>Archive</span>
          <span role="button" className='badge bg-success'>New</span>
        </div>
      </td>
    </tr>
  )
}
export default Tablelist;