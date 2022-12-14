import React from "react";
import "../Components/style.css";
import WelcomeAdminImage from "../Components/WelcomeAdmin";
import LoginForm from "../Components/Form/LoginForm";
import SocialButton from "../Components/Social";

function Login() {
  return (
    <>
      <div className="flex-container">
        <div className="left-side">
          <h1 className="form-title">LOGIN</h1>
          <LoginForm></LoginForm>
          <SocialButton></SocialButton>
        </div>

        <div className="right-side">
          <WelcomeAdminImage></WelcomeAdminImage>
        </div>
      </div>
    </>
  );
}

export default Login;
