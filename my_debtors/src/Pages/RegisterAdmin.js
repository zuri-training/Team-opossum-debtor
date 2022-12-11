import React from "react";
import FormAdmin from "../Components/FormAdmin";
import Question from "../Components/Question";
import Button from "../Components/Button";
import "../Components/style.css";
import WelcomeAdminImage from "../Components/WelcomeAdmin";

const RegisterAdmin = () => {
  return (
    <React.Fragment>
      <div className="flex-container">
        <div className="left-side">
          <h1 className="form-title">Admin</h1>
          <FormAdmin></FormAdmin>
          <Question></Question>
          <Button></Button>
        </div>

        <div className="right-side">
          <WelcomeAdminImage></WelcomeAdminImage>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterAdmin;
