import React from 'react';
import './HeroSection.css';
import heroimg from './images/restauranfood.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
          <div className="hero-button">
            <a href="#reservations">Book a Table</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroimg} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
