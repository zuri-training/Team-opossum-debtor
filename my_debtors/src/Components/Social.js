import React from "react";
import { ReactComponent as Google } from '../images/Google.svg';
import { ReactComponent as Facebook } from '../images/Facebook.svg';
import { ReactComponent as Apple } from '../images/Apple.svg';
import './style.css'

function SocialButton() {
  return (
    <React.Fragment>
      <p><hr /><span className="word-or"> or </span><hr /></p>
      
      <a href="https://accounts.google.com/" target="_blank" rel="noreferrer">
       <Google />
      </a>
      
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <Facebook />
      </a>

      <a href="https://appleid.apple.com/sign-in" target="_blank" rel="noreferrer">
       <Apple />
      </a>
      
    </React.Fragment>
  );
}

export default SocialButton;
 