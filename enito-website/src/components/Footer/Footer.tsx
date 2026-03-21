import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <div className="logo-text">ENITO</div>
        </div>
        <p className="footer-text">© 2024 ENITO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;