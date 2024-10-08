import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroSection />
        <Highlights />
      </div>
    </div>
  );
}

export default App;
