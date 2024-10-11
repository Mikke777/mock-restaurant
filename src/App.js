import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <HeroSection onSectionChange={setCurrentSection} />
            <Highlights onSectionChange={setCurrentSection} />
            <Testimonials />
            <About />
          </>
        );
      case 'about':
        return <About />;
      case 'menu':
        return <Menu />;
      case 'reservations':
        return <Reservations />;
      case 'order-online':
        return <OrderOnline />;
      case 'login':
        return <Login onSectionChange={setCurrentSection} />;
      default:
        return <HeroSection onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="App">
      <Navbar onSectionChange={setCurrentSection} />
      <div id="home">
        {renderSection()}
      </div>
      <Footer onSectionChange={setCurrentSection} />
    </div>
  );
}

export default App;
