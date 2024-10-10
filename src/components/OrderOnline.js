import React, { useState } from 'react';
import dishes from './Recipe';


const OrderOnline = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleSelectDish = (dish) => {
      setSelectedDishes([...selectedDishes, dish]);
  };

  return (
      <section className="order-online-section" id="order-online">
          <h1>Order Online</h1>

          <div className="dishes-container">
              {dishes.map((dish) => (
                  <div key={dish.id} className="dish-card">
                      <h2>{dish.name}</h2>
                      <p>{dish.description}</p>
                      <p>${dish.price.toFixed(2)}</p>
                      <button onClick={() => handleSelectDish(dish)}>Add to Cart</button>
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
      </section>
  );
};

export default OrderOnline;
