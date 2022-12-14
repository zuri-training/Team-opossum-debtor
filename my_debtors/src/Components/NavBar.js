import React from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-nav">
      <img src={Logo} className="logo" alt="Debtors Logo" />
      <div className="mid">
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/Faq">FAQ</NavLink>
          </li>
          <li className="btn">
            <NavLink to="/RegisterUser"><button className="btn-signup2">Sign Up</button></NavLink>
          </li>
          <li className="btn">
            <NavLink to="/Login"><button className="btn-login">Login</button></NavLink>
          </li>
        </ul>
       
      </div>
    </div>
  );
};

export default NavBar;
