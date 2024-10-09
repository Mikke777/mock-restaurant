import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
