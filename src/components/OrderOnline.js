import React, { useState } from 'react';
import './OrderOnline.css';
import dishes from './Recipe';
import Swal from 'sweetalert2';


const OrderOnline = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleSelectDish = (dish) => {
      setSelectedDishes([...selectedDishes, dish]);
  };

  const handleCheckout = async () => {
    const { value: address } = await Swal.fire({
      title: "Enter your delivery address",
      input: "text",
      inputLabel: "Delivery Address",
      inputPlaceholder: "Enter your delivery address here",
      showCancelButton: true,
    });

    if (address) {
      Swal.fire({
        icon: 'success',
        title: 'Order Placed!',
        text: `Your order will be delivered to ${address} in 30 minutes. Payment will be made upon delivery.`,
      }).then(() => {
        setSelectedDishes([]);
      });
    }
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
                <>
                    {selectedDishes.map((dish, index) => (
                        <div key={index}>
                            <p>{dish.name} - ${dish.price.toFixed(2)}</p>
                            <button onClick={() => setSelectedDishes(selectedDishes.filter((selectedDish) => selectedDish.id!== dish.id))}>Remove</button>
                        </div>
                    ))}
                    <div className="total">
                        <strong>Total:</strong> ${selectedDishes.reduce((acc, dish) => acc + dish.price, 0).toFixed(2)}
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            ) : (
                <p>No dishes selected yet.</p>
            )}
          </div>
        </div>
      </section>
  );
};

export default OrderOnline;
