import React from 'react';
import './Footer.css';
import logo from './images/logo-lemon.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="Little Lemon Logo" />
        </div>

        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
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
            <li><a href="#" aria-label="Follow us on Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Follow us on Instagram">Instagram</a></li>
            <li><a href="#" aria-label="Follow us on Twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
