import React from "react";
import "./Navbar.css";
import { useEffect,useState } from "react";
import uuid from "react-uuid";
import { useNavigate, useParams } from "react-router-dom";
import {useForm} from "./hooks/useForm"
import { addtable_data, edittable_data,gettable_dataById } from "./Services/localstorage";
function New_Recuriment() {
  //const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    jobrole: "",
    employee_level: "",
    details: "",
  });

  useEffect(() => {
    if (id) {
      const table_data = gettable_dataById(id);
      setForm(table_data);
    }
  }, [id]);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputValues);
      resetForm();
    id
      ? edittable_data(id, inputValues)
      : addtable_data({ id: uuid(), ...inputValues });
    resetForm();
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };

  return (
    <div className="new-data-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            placeholder="Enter name of your Recuitment"
          />
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <select
            name="jobrole"
            id="jobrole"
            value={inputValues.jobrole}
            onChange={handleInputChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Job Role</option>
            <option value="1">One</option>
          </select>

          <select
            name="employee_level"
            id="employee_level"
            value={inputValues.employee_level}
            onChange={handleInputChange}
            className="form-select"
            aria-label="Default select example"
          >
    
            
            <option selected>Select level of employee</option>
            <option value="1">One</option>
          </select>
        </div>
        <br />
        <select className="form-select" aria-label="Default select example">
          <option selected>Other</option>
          <option value="1">One</option>
        </select>
        <br />
        <br />
        <div class="form-group">
          <textarea
                      name="details"
                      value={inputValues.details}
            onChange={handleInputChange}
            class="form-control"
            id="details"
            rows="3"
            placeholder="Write description here "
          ></textarea>
        </div>

        <div className="d-flex flex-row justify-content-end mt-4 flex-gap ">
          <div>
            <button id="b-id" type="submit" className="btn btn-success ">
              Cancel
            </button>
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Save Continue
            </button>
          </div>
        </div>
      </form>
      {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} Employee.
                        </div>
                    </div>
                )
            }
    </div>
  );
}

export default New_Recuriment;
