import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="left">
      <img src={Logo} className="logo" alt="Debtors Logo" />
      <div className="mid">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
          <li>
            <Link to="/RegisterUser">SignUp User</Link>
          </li>
          <li>
            <Link to="/RegisterAdmin">SignUp Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
