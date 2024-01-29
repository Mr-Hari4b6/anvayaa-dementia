import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  , faLock, faEnvelope,faMobile} from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import logo from '../../../assets/pwdlogo.png';
import './style.scss';
import useRegistrationForm from '../../../utils/useRegistrationForm';

export const RegisterForm = () => {
  const { handleChange, handleSignUp } = useRegistrationForm();

  return (
    <div className={"registerContainer"}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign Up</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="fa fa-user icon" />
              <input
                className="LoginInput"
                name="username"
                type="text"
                onChange={(e) => handleChange(e)}
                placeholder="Enter Full Name"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faMobile} className="fa fa-mobile icon" />
              <input
                className="LoginInput"
                name="mobilenumber"
                type="number"
                onChange={(e) => handleChange(e)}
                placeholder="Mobile Number"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto icon" />
              <input
                className="LoginInput"
                name="email"
                type="email"
                onChange={(e) => handleChange(e)}
                placeholder="Enter Email"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto icon" />
              <input
                className="LoginInput"
                name="newpassword"
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Enter new Password"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto icon" />
              <input
                className="LoginInput"
                name="confirmpassword"
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
           
            <button className="btn" onClick={handleSignUp}>
             Register
            </button>
            <p className="social-text loginp">Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className="my-auto mx-auto" />
              </a>
            </div>
          </form>
         
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3" style={{ color: 'crimson' }}>
              ElderEase
            </h3>
            <p className="loginp">'Never too early, never too late'</p>
          </div>
          <img src={logo} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
