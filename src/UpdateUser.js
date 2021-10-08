import "./styles.css";
import React from "react";

export const UpdateUser = () => {
  return (
    <div className="FormContainer_AddUser">
      <div className="row">
        <div className="col">
          <h4>Update User</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            class="form-control CommonInputBox"
            id="First Name"
            placeholder="First Name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="email"
            class="form-control CommonInputBox"
            id="Last Name"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="email"
            class="form-control CommonInputBox"
            id="EmailID"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            class="form-control CommonInputBox"
            id="AddressLine1"
            placeholder="Mobile No"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Transgender</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            class="form-control CommonInputBox"
            id="AddressLine2"
            placeholder="Address"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            class="form-control CommonInputBox"
            id="City"
            placeholder="City"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            type="text"
            class="form-control CommonInputBox"
            id="State"
            placeholder="State"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            class="form-control CommonInputBox"
            id="ZipCode"
            placeholder="Zip-Code"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Country</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" class="btn btn-outline-dark">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
