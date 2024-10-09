import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Menu from './components/Menu'; // Import the Menu component
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home'); // State to track current section

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <Highlights />
            <Testimonials />
            <About />
          </>
        );
      case 'about':
        return <About />;
      case 'menu':
        return <Menu />;
      case 'reservations':
        return <div>Reservations Component</div>; // Replace with actual component
      case 'order-online':
        return <div>Order Online Component</div>; // Replace with actual component
      case 'login':
        return <div>Login Component</div>; // Replace with actual component
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="App">
      <Navbar onSectionChange={setCurrentSection} /> {/* Pass down the setCurrentSection function */}
      <div id="home">
        {renderSection()} {/* Render the current section */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
