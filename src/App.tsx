
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './views/home/Home';
import About from './views/about/About';
import PageReveal from './components/PageReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <PageReveal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
}
