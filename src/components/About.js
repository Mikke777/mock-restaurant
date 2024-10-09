import React from 'react';
import './About.css';
import mario from './images/Mario.jpg'

const About = () => {
  return (
    <section className="about-section" id="about">
      <h1>About Little Lemon</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={mario} alt="about-image" />
        </div>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in Chicago, Illinois.
          Our mission is to provide an exceptional dining experience, focusing on traditional recipes
          served with a modern twist. We are open for reservations 24/7, so don't hesitate to reach out to us. We look forward to
          serving you with our delectable dishes and providing a memorable experience.
        </p>
      </div>
    </section>
  );
};

export default About;
