import React from "react";
import "./Navbar.css";
function New_Recuriment() {
  return (
    <div className="new-data-form">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name of your Recuitment"
          />
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <select className="form-select" aria-label="Default select example">
            <option selected>Job Role</option>
            <option value="1">One</option>{" "}
          </select>

          <select className="form-select" aria-label="Default select example">
            <option selected>Select level of employee</option>
            <option value="1">One</option>{" "}
          </select>
        </div>
        <br />
        <select className="form-select" aria-label="Default select example">
          <option selected>Other</option>
          <option value="1">One</option>{" "}
        </select>
        <br />
        <br />
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
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
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default New_Recuriment;
