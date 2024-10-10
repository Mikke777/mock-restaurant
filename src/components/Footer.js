import React from 'react';
import './Footer.css';
import logo from './images/logo-lemon.png';

const Footer = ({ onSectionChange }) => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="Little Lemon Logo" />
        </div>

        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => onSectionChange('home')}>Home</button></li>
            <li><button onClick={() => onSectionChange('about')}>About</button></li>
            <li><button onClick={() => onSectionChange('menu')}>Menu</button></li>
            <li><button onClick={() => onSectionChange('reservations')}>Reservations</button></li>
            <li><button onClick={() => onSectionChange('order-online')}>Order Online</button></li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>123 Main St, City, State, ZIP</p>
          <p>Phone: <a href="tel:1234567890">(123) 456-7890</a></p>
          <p>Email: <a href="mailto:info@lemon.com">info@lemon.com</a></p>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
