// Pages/Login.jsx
import React from 'react';
import './CSS/Login.css';

const Login = ({ setIsLoggedIn }) => {
  const handleGoogleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleFacebookLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <button onClick={handleGoogleLogin} className="login-btn google">
          Login with Google
        </button>
        <button onClick={handleFacebookLogin} className="login-btn facebook">
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
