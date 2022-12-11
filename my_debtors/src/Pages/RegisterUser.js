import React from "react";
import FormUser from "../Components/FormUser";
import Question from "../Components/Question";
import Button from "../Components/Button";
import Social from "../Components/Social";
import WelcomeImage from "../Components/Welcome";
import '../Components/style.css';

function RegisterUser() {
  return (
    <React.Fragment>
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
