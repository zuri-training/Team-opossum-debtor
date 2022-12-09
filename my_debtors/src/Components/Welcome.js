import React from 'react';
import Welcome from "../images/welcome.png";
import './style.css'

function WelcomeImage() {
    return (
        <div className='welcome-container'>
            <img src={Welcome} className="welcome-pic" alt="Welcome" />
        </div>
    );
}

export default WelcomeImage;