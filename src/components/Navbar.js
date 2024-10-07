import React, { useState } from 'react';
import logo from './images/logo-lemon.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing the icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/closed
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} /> {/* Toggle icon */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
