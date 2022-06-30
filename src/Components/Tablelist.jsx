import React from 'react';
import { useState } from 'react';
import { getlisttabledata, removetable_data } from "./Services/localstorage";
import {useNavigate} from "react-router-dom"
function Tablelist({ table_data,setlisttabledata  }) {
  const navigate = useNavigate();
  // const [listtabledata, setlisttabledata] = useState([]);
  const { id, name, jobrole, employee_level, details } = table_data;
  const deletetable_data = () => {
    debugger;
    removetable_data(id);
    setlisttabledata(getlisttabledata());

  };
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
        <div className='d-flex gap-1 mt-2'>
          <span role="button" className='badge text-danger' onClick={() => deletetable_data()}><i class="far fa-trash-alt"></i></span>
          <span role="button" className='badge text-success' onClick={() => navigate(`/edit-table_data/${id}`)}><i class="far fa-edit"></i></span>
          <span role="button" className='badge text-info'><i className="fas fa-archive"></i></span>
          <span role="button" className='badge text-success' onClick={()=>navigate('New_Recuriment')}><i class="fas fa-user-alt"></i></span>
          
        </div>
      </td>
    </tr>
  )
}
export default Tablelist;
