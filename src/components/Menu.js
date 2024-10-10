// src/components/Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu-section">
      <h1>Our Menu</h1>
      <p>Here is where we would display the menu items.</p>
      <div>
        <h2>Appetizers:</h2>
        <ul>
          <li>Hummus Trio: A trio of classic, roasted red pepper, and garlic hummus served with warm pita bread.</li>
          <li>Spanakopita: Golden-brown filo pastry filled with spinach, feta cheese, and dill.</li>
          <li>Calamari Fritti: Tender fried squid served with lemon and aioli.</li>
          <li>Bruschetta: Our Bruschetta is made from grilled bread that has been smeared with salt and olive oil</li>
        </ul>
      </div>
      <div>
        <h2>Salads:</h2>
        <ul>
          <li>Greek Salad: A trio of classic, roasted red pepper, and garlic hummus served with warm pita bread.</li>
          <li>Caesar Salad: Crisp romaine lettuce, croutons, Parmesan cheese, and a creamy Caesar dressing.</li>
        </ul>
      </div>
      <div>
        <h2>Main Courses:</h2>
        <ul>
          <li>Moussaka: A layered dish of eggplant, ground lamb, béchamel sauce, and Greek spices.</li>
          <li>Paella: A flavorful rice dish with saffron, chicken, seafood, and vegetables.</li>
          <li>Lamb Shank: Slow-cooked lamb shank served with roasted potatoes and a red wine sauce.</li>
        </ul>
      </div>
      <div>
        <h2>Desert:</h2>
        <ul>
          <li>Lemon Dessert: This comes straight from grandma's recipe book, every last ingriedient has been sourced and is as authentic as can be imagined.</li>
          <li>Baklava: A flaky pastry filled with chopped nuts and sweetened with honey.</li>
          <li>Tiramisu: A classic Italian dessert made with ladyfingers soaked in coffee and layered with mascarpone cheese and cocoa powder.</li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
