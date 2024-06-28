import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_logo">
            <p className="logo"><span>ross</span>tech</p>
            <p className="tagline">Connecting Your Supply Chain Seamlessly</p>
          </div>
          <div className="footer_contact">
            <p className="contact_label">Contact us -</p>
            <p className="contact_email">company@gmail.com</p>
          </div>
        </div>
        <div className="footer_right">
          <div className="social_media">
            <div className="social_row">
              <p className="social_link" id="instagram">Instagram</p>
              <p className="social_link" id="twitter">Twitter</p>
            </div>
            <div className="social_row">
              <p className="social_link" id="facebook">Facebook</p>
              <p className="social_link" id="linkedin">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_line"></div>
        <p className="footer_rights">© Rosstech 2024, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
