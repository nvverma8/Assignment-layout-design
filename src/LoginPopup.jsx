// LoginPopup.js
import React from 'react';
import './LoginPopup.css'; // You can create this CSS file for styling

const LoginPopup = ({ onClose }) => {
  return (
    <div className="loginPopup">
      <div className="loginPopup__content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        {/* Add your login form here */}
        <form>
          <input type="text" placeholder="Email" className='glittery-border' />
          <input type="password" placeholder="Password"
          className='glittery-border' />
          <button>Login</button>
          <p>Forgot details? <span>Contact our admin</span></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
