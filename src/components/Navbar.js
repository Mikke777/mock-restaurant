import React, { useState, useEffect, useRef } from 'react';
import logo from './images/logo-lemon.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar({ onSectionChange }) { // Accept onSectionChange as a prop
  const [isOpen, setIsOpen] = useState(false);
  const navLinksRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navLinksRef.current && !navLinksRef.current.contains(event.target) &&
        menuIconRef.current && !menuIconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`} ref={navLinksRef}>
          <ul>
            <li><button onClick={() => onSectionChange('home')}>Home</button></li>
            <li><button onClick={() => onSectionChange('about')}>About</button></li>
            <li><button onClick={() => onSectionChange('menu')}>Menu</button></li>
            <li><button onClick={() => onSectionChange('reservations')}>Reservations</button></li>
            <li><button onClick={() => onSectionChange('order-online')}>Order Online</button></li>
            <li><button onClick={() => onSectionChange('login')}>Login</button></li>
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
