import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </div>
    </div>
  );
}

export default App;
