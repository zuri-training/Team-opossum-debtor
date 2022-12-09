import React from 'react';
import WelcomeAdmin from "../images/welcomeAdmin.png";
import './style.css';

function WelcomeAdminImage() {
    return (
        <div className='welcome-container'>
            <img src={WelcomeAdmin} className="welcome-admin" alt="Welcome" />
        </div>
    );
}

export default WelcomeAdminImage;