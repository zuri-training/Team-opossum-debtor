import React from "react";
import "../style.css";
import { Link } from "react-router-dom";


function LoginForm() {
  return (
    <>
      <form className="form-container">
        <div className="input-text">
          <div>
             <input type="email" placeholder="Email Address" id="email" />
          </div>
          <div>
             <input type="password" placeholder="Password" id="password" />
          </div>
        </div>
      </form>

      <span className="account">
        <Link to="/ForgotPassword" className="forgot-pwd">Forgot Password?</Link>
      </span>

      <p><button className="btn-signup">Login</button></p>
      <div className="question">
      <p className="account account-two">
        Don't have an account?<span className="login"> 
        <Link to="/RegisterUser" className="login"> Sign up</Link>
        
        </span>
      </p>
      </div>
    </>
  );
}

export default LoginForm;
