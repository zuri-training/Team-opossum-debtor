import React from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="body-content">
        <h2>Home Page</h2>
        <Link to="/">Home</Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
