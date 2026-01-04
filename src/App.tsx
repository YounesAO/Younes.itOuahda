import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Badges from './components/Badges';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './contexts/ThemeContext';
import Analytics from './components/Analytics';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import ParticleBackground from './components/ui/ParticleBackground';

const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Badges />
      <Experience />
      <Education />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Analytics />
        <CustomCursor />
        <ScrollProgress />
        <BackToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-x-hidden">
          {/* Noise texture overlay for premium feel */}
          <div className="noise-overlay" />

          {/* Particle background */}
          <ParticleBackground />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;