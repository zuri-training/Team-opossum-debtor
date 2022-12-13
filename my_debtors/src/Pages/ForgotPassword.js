import React from "react";
import FogPwd from "../Components/FgPwd";
import "../Components/style.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <div className="password-container">
        <FogPwd></FogPwd>
        <h2>Forgot password?</h2>
        <p className="re-send">No worries, we'll send you reset instructions.</p>

        <form>
          <input type="email" placeholder="Email Address" />
        </form>

        <br/>
        <button className="btn-signup">Reset Password</button>
        <p>Back to 
        <Link to="/Login" className="login"> Login</Link>
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
