import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projetcs/Projects';
import Contact from '../contact/Contact';
import Aurora from '../../components/Aurora';

type Props = {
  initialSection?: string;
};

// The whole portfolio on one scrolling page. Old routes (/about, /work, /contact)
// still work: they render this page and scroll to the matching section.
export default function OnePage({ initialSection }: Props) {
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash ? hash.slice(1) : initialSection;
    if (!id) {
      window.scrollTo({ top: 0 });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      // Wait a frame so the sections have rendered before scrolling.
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [hash, initialSection]);

  return (
    <>
      {/* Magazine-style "pages": each section is a full-height block in its own colour. */}
      <div id="home" className="relative overflow-hidden scroll-mt-16 min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-cream">
        {/* Animated aurora behind the hero only (contained by this section). */}
        <Aurora
          colorStops={['#FFC4EC', '#B64DFF', '#8C4DFF']}
          amplitude={1.0}
          blend={0.5}
          speed={0.5}
          className="absolute inset-0 z-0 pointer-events-none"
        />
     
        <Home />
      </div>
      <div id="about" className="scroll-mt-16 min-h-screen flex flex-col justify-center bg-plum text-cream">
        <About />
      </div>
      <div id="work" className="scroll-mt-16 min-h-screen flex flex-col justify-center bg-cream">
        <Projects />
      </div>
      <div id="contact" className="scroll-mt-16 min-h-screen flex flex-col justify-center bg-plum text-cream">
        <Contact />
      </div>
    </>
  );
}
