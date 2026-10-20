import { Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import CaseStudyRoute from './views/case-study/CaseStudyRoute';
import OnePage from './views/one-page/OnePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-cream text-ink relative">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<OnePage />} />
          <Route path="/about" element={<OnePage initialSection="about" />} />
          <Route path="/work" element={<OnePage initialSection="work" />} />
          <Route path="/contact" element={<OnePage initialSection="contact" />} />
          <Route path="/projects/:slug" element={<CaseStudyRoute />} />
        </Routes>
      </main>
      <Analytics />
      <Footer />
    </div>
  );
}
