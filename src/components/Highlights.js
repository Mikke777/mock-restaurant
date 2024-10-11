import React from 'react';
import './Highlights.css';
import Gsalad from './images/greek salad.jpg';
import Bruschetta from './images/bruschetta.png';
import Ldes from './images/lemon dessert.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const Highlights = ({ onSectionChange }) => {
  return (
    <section className="highlights-section">
      <div className="highlights-content">
        <div className="highlights-text-ancor">
          <h1>This week specials!</h1>
          <button onClick={() => onSectionChange('menu')}>Online Menu</button>
        </div>
        <div className="highlights-grid">
          <div className="card-highlight">
            <img src={Gsalad} alt="Greek Salad" />
            <div className="card-title-price">
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <div className="card-description">
              <p>
                The famous greek salad of crispy
                lettuce, peppers, olives and
                our Chicago style feta cheese garnished with
                crunchy garlic and rosemary
                croutons.
              </p>
            </div>
            <div className='order-now'>
              <button onClick={() => onSectionChange('order-online')}>Order now <FontAwesomeIcon icon={faTruck} /></button>
            </div>
          </div>

          <div className="card-highlight">
            <img src={Bruschetta} alt="Bruschetta" />
            <div className="card-title-price">
              <h3>Bruschetta</h3>
              <p>$5.99</p>
            </div>
            <div className="card-description">
              <p>
                Our Bruschetta is made from grilled
                bread that has been smeared with salt and olive oil
              </p>
            </div>
            <div className='order-now'>
              <button onClick={() => onSectionChange('order-online')}>Order now <FontAwesomeIcon icon={faTruck} /></button>
            </div>
          </div>

          <div className="card-highlight">
            <img src={Ldes} alt="Lemon dessert" />
            <div className="card-title-price">
              <h3>Lemon Dessert</h3>
              <p>$5.00</p>
            </div>
            <div className="card-description">
              <p>
                This comes straight from
                grandma's recipe book, every
                last ingriedient has been sourced and is as authentic as can be
                imagined.
              </p>
            </div>
            <div className='order-now'>
              <button onClick={() => onSectionChange('order-online')}>Order now <FontAwesomeIcon icon={faTruck} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights;
