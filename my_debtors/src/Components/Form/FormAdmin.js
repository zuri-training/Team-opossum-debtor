import React from "react";
import './style.css'

function FormAdmin() {
  return (
    <React.Fragment>
      <form className="form-container">
        <div className="input-text">
          <input type="text" placeholder="Name of institution" id="institution" />
        </div>
        <div>
          <input type="text" placeholder="State" id="state" />
        </div>
        <div>
          <input type="number" placeholder="Institute Address" id="address" />
        </div>
        <div>
          <input type="email" placeholder="Email Address" id="email" />
        </div>
        <div>
          <input type="password" placeholder="Password" id="password" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            id="co-password"
          />
        </div>
      </form>
    </React.Fragment>
  );
}

export default FormAdmin;
