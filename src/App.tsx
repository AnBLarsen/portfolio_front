import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './views/home/Home';
import About from './views/about/About';
import PageReveal from './components/PageReveal';
import Aurora from './components/Aurora';
import { useAuroraProps, useIsDark } from './hooks/useAuroraProps';
import Projects from './views/projetcs/Projects';


export default function App() {
  const isDark = useIsDark();
  const auroraProps = useAuroraProps(isDark);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 relative">
      <Aurora {...auroraProps} isDark={isDark} />
      <PageReveal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
