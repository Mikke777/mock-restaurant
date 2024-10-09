import React from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} style={{color: "#FFD43B"}} />
    ));
  };

  return (
    <section className="testimonials-section">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>
            Little Lemon is an amazing place to eat.
            I've been coming to this restaurant for over a
            year now and I can't say enough good things about it.
            The food is delicious, the service is attentive and the ambiance is just perfect.
            I highly recommend this place to anyone looking for a great Mediterranean dining experience.
          </p>
          <div className='testimonials-info'>
            <p>{renderStars(5)}- John Doe</p>
          </div>
        </div>
        <div className="testimonial-card">
          <p>
            Little Lemon is a culinary treasure. I've been a regular for over a year, and it never fails to impress.
            The food is exquisite, the service is top-notch, and the atmosphere is utterly charming.
            If you're craving a memorable Mediterranean dining experience, Little Lemon is the place to be.
          </p>
          <div className='testimonials-info'>
            <p>{renderStars(4)}- Giorgio Parenzo</p>
          </div>
        </div>
        <div className="testimonial-card">
          <p>
            Little Lemon is a gem of a Mediterranean restaurant. I've been a loyal patron for over a year,
            and it consistently delivers exceptional dining experiences. The food is always a delight,
            the service is impeccable, and the ambiance is inviting. If you're seeking a fantastic Mediterranean meal, Little Lemon is a must-try.
          </p>
          <div className='testimonials-info'>
            <p>{renderStars(5)}- Riccardo Cruciani</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
