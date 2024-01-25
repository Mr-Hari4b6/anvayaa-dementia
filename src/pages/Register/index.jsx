import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  , faLock, faEnvelope,faMobile} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/pwdlogo.png';
import './style.scss';

export const RegisterForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: '', 
    Mobilenumber:'',
    Email:'',
    newpassword: '',
    confrimpassword:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (userDetails.newpassword !== userDetails.confirmpassword) {
        alert("New password and confirm password not matched");
        return;
      }
   
      navigate('/Layout/Profile');
    
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Register</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="fa fa-user" />
              <input
                className="LoginInput"
                name="username"
                type="text"
                onChange={(e) => handleChange(e)}
                placeholder="Enter Full Name"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faMobile} className="fa fa-mobile" />
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
                name="Email"
                type="text"
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
           
            <button className="btn" onClick={handleSignIn}>
             Register
            </button>
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
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">ElderEase</h3>
            <p className="loginp">'Never too early, never too late'</p>
          </div>
          <img src={logo} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
