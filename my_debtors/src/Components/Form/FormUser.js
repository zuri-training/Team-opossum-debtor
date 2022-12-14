import React from "react";

function FormUser() {
  return (
    <React.Fragment>
      <form className="form-container">
        <div className="input-text">
          <input type="text" placeholder="First Name" id="firstname" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" id="lastname" />
        </div>
        <div>
          <input type="number" placeholder="Phone Number" id="phonenumber" />
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

export default FormUser;
