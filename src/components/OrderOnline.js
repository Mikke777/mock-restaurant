import React, { useState } from 'react';
import './OrderOnline.css';
import dishes from './Recipe';


const OrderOnline = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleSelectDish = (dish) => {
      setSelectedDishes([...selectedDishes, dish]);
  };

  return (
      <section className="order-online-section" id="order-online">
          <h1>Order Online</h1>
        <div className="menu-cards">
          <div className="dishes-container">
            {dishes.map((dish) => (
                <div key={dish.id} className="dish-card">
                  <div className="dish-card-name">
                    <h2>{dish.name}</h2>
                    <p>{dish.description}</p>
                  </div>
                  <div className="dish-card-pay">
                    <p>${dish.price.toFixed(2)}</p>
                    <button onClick={() => handleSelectDish(dish)}>Add to Cart</button>
                  </div>
                </div>
            ))}
          </div>
          <div className="cart">
              <h2>Selected Dishes</h2>
              {selectedDishes.length > 0 ? (
                  selectedDishes.map((dish, index) => (
                      <div key={index}>
                          <p>{dish.name} - ${dish.price.toFixed(2)}</p>
                      </div>
                  ))
              ) : (
                  <p>No dishes selected yet.</p>
              )}
          </div>
        </div>



      </section>
  );
};

export default OrderOnline;
