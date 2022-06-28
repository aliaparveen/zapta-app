import React from 'react'
import "./Navbar.css"
function Table() {
  return (
      <div className="table_data">
          <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Recuriments Name</th>
            <th scope="col">Candates No</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
                      <td>28/6/2022</td>
                      <td><select className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>In Progress</option>
  <option value="1">One</option>
  
                      </select></td>
                      <td>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-success">Update</button>
              <button className='btn btn-warning'>Move</button>
                      </td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
                      <td>28/6/2022</td>
                      <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
                      <td>28/6/2022</td>
                      <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table