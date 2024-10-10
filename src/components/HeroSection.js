import React from 'react';
import './HeroSection.css';
import heroimg from './images/restauranfood.jpg';

const HeroSection = ({ onSectionChange }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterrranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <div className="hero-button">
            <button onClick={() => onSectionChange('reservations')}>Book a Table</button>
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
