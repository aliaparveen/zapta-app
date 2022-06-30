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
      {listtabledata.length >0 ? (
        <table className="table table-hover mt-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Job Title</th>
              <th>Level Of Job</th>
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