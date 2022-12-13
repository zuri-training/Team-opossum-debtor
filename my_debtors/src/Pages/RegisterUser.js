import React from "react";
import FormUser from "../Components/Form/FormUser";
import Question from "../Components/Question";
import Button from "../Components/Button";
import Social from "../Components/Social";
import WelcomeImage from "../Components/Welcome";
import '../Components/style.css';
// import { Link } from "react-router-dom";

function RegisterUser() {
  return (
    <React.Fragment>
    {/* <Link to="../RegisterUser">SignUp</Link> */}
     <div className="flex-container">
     <div className="left-side">
        <h1 className="form-title">User</h1>
        <FormUser></FormUser>
        <Question></Question>
        <Button></Button>
        <Social></Social>
      </div>
      <div className="right-side">
      <WelcomeImage></WelcomeImage>
      </div>
     </div>
      
    </React.Fragment>
  );
}

export default RegisterUser;
