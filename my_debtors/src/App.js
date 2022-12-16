import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Faq from "./Pages/Faq";
import Login from "./Pages/Login";
import "./Components/style.css";
// import Error from "./Pages/Error";
import RegisterUser from "./Pages/RegisterUser";
import Footer from "./Components/Footer";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
         <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;

/* <img src={logo} className="App-logo" alt="logo" /> */
