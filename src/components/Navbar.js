import React, { useState, useEffect, useRef } from 'react';
import logo from './images/logo-lemon.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinksRef = useRef(null); // Create a reference for the dropdown menu
  const menuIconRef = useRef(null); // Create a reference for the menu icon

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was outside the dropdown menu and the menu icon
      if (
        navLinksRef.current && !navLinksRef.current.contains(event.target) &&
        menuIconRef.current && !menuIconRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the dropdown menu
      }
    };

    // Add event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`} ref={navLinksRef}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
