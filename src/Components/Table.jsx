import React from "react";
import "./Navbar.css";
import Tablelist  from "./Tablelist";
import { useState, useEffect } from "react";
import { getlisttabledata } from "./Services/localstorage";
function Table() {
  const [listtabledata, setlisttabledata] = useState('');
  useEffect(() => {
    setlisttabledata(getlisttabledata());
  },[]);
  return (
    <div className="table_data">
      <h1 className="my-5 text-center">Data List</h1>
      {listtabledata.length >0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Recuriments Name</th>
              <th>Candates No</th>
              <th>Start Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <Tablelist /> */}
            {
                                    listtabledata.map(table_data => <Tablelist table_data={table_data} key={table_data.id} setlisttabledata={setlisttabledata} />)
                                }
          </tbody>
        </table>
      ) : (
        <h1 className="text-center">Sorry No data</h1>
      )}
    </div>
  );
}
export default Table;