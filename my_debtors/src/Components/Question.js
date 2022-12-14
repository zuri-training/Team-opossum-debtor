import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function Question() {
  return (
    <React.Fragment>
      <p className="account">
        Already have an account?
        <span className="login"> 
        <Link to="/Login" className="login"> Login</Link>
        </span>
      </p>
      
    </React.Fragment>
  );
}

export default Question;
