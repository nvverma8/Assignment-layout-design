import React,{useState} from "react";
import LoginPopup from './LoginPopup.jsx'
import './Navbar.css'

const Navbar = () => {
    const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };
  return (
    <div className="navBar">
      <div className="navBar__logo">
        <div className="logo__text"><p><span>ross</span>tech</p></div>
      </div>
      <div className="navBar__menu">
        <a href="#">ABOUT US</a>
        <a href="#">HOW IT WORKS ?</a>
        <a href="#">CONTACT US</a>
      </div>
      <div className="navBar__Login">
        <button onClick={toggleLoginPopup}>Log in</button>
        {showLoginPopup && <LoginPopup onClose={toggleLoginPopup} />}
      </div>
    </div>
  );
};

export default Navbar;
