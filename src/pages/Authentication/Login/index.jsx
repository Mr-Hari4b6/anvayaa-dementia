import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import useLoginForm from '../../../utils/useLoginForm';
import logo from '../../../assets/pwdlogo.png';
import './style.scss';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { handleChange, handleLogin } = useLoginForm();

  return (
    <div className="loginContainer">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto icon" />
              <input
                className="LoginInput"
                name="mobilenumber"
                type="number"
                onChange={(e) => handleChange(e)}
                placeholder="Mobile Number"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto icon" />
              <input
                className="LoginInput"
                name="newpassword"
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="forgotPassword">
              <Link
                to="/register"
                className='register-link'
                onClick={() => { navigate('/register') }}
              >
                Register here
              </Link>
              <div style={{ color: 'red' }}>Forgot password</div>
            </div>
            <button className="btn" onClick={(e) => handleLogin(e)}>
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
