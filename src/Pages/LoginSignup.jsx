// import React from 'react'
// import './CSS/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type='text' placeholder='Your Name'/>
//           <input type='email' placeholder='Email Address'/>
//           <input type='password' placeholder='Password'/>
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">
//           Already have an account? <span>Login here</span>
//         </p>
//         <div className="loginsignup-agree">
//           <input type='checkbox' name='' id=''/>
//           <p>By continuing, I agree to the terms of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup;


// Pages/LoginSignup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = ({ setIsLoggedIn }) => {
  const handleContinue = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button onClick={handleContinue}>Register</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login/google-facebook">Login here</Link>
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
