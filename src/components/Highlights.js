import React from 'react';
import './Highlights.css';


const Highlights = () => {
  return (
    <section className="highlights-section">
      <div className="highlights-content">
        <div className="highlights-text-ancor">
          <h1>This week specials!</h1>
          <a href="#menu">Online Menu</a>
        </div>
        <div className="highlights-grid">
          <div className="highlight">
            <img src="https://example.com/image1.jpg" alt="highlight-image" />
            <h3>Spicy Chicken Wings</h3>
            <p>$12.99</p>
          </div>
          <div className="highlight">
            <img src="https://example.com/image2.jpg" alt="highlight-image" />
            <h3>Tenderloin Salad</h3>
            <p>$9.99</p>
          </div>
          <div className="highlight">
            <img src="https://example.com/image3.jpg" alt="highlight-image" />
            <h3>Grilled Chicken Breast</h3>
            <p>$15.99</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Highlights;
