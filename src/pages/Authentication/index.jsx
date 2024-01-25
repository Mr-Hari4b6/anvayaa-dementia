import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import{Link} from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/pwdlogo.png';
import './style.scss';

export const AuthenticationForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  });
  const [isRegisterClicked, setRegisterClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (userDetails.username === '6281984192' && userDetails.password === '123456') {
      localStorage.setItem('isLoggedIn', true);
      navigate('/layout/profile');
    }
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleRegisterClick = () => {
    navigate('/register');
    setRegisterClicked(true);
  };
  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto icon" />
              <input
                className="LoginInput"
                name="username"
                type="number"
                onChange={(e) => handleChange(e)}
                placeholder="Mobile Number"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto icon" />
              <input
                className="LoginInput"
                name="password"
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="forgotPassword">
            <Link
          to="/register"
          className={isRegisterClicked ? 'register-link-clicked' : 'register-link'}
          onClick={handleRegisterClick}
        >
          Register
        </Link>
              <div style={{ color: 'red' }}>Forgot password</div>
            </div>
            <button className="btn" onClick={handleSignIn}>
              Sign In
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
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto icon" />
              <input className="LoginInput" type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto icon" />
              <input className="LoginInput" type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto icon" />
              <input className="LoginInput" type="password" placeholder="Password" />
            </div>
            <button className="btn">Sign Up</button>
            <p className="social-text loginp">Or Sign up with social platforms</p>
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
