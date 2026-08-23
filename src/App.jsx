import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Modules from './components/Modules';
import Features from './components/Features';
import Technologies from './components/Technologies';
import DevelopmentProcess from './components/DevelopmentProcess';
import Comparison from './components/Comparison';
import ChallengesSolved from './components/ChallengesSolved';
import Roadmap from './components/Roadmap';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Gallery from './components/Gallery';
export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0b] text-slate-200' : 'bg-slate-50 text-slate-900'
          }`}>
          {/* Sticky Navigation */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main Content Sections */}
          <main>
            <Routes>
              <Route path='/' element={
                <>
                  <section id="hero" className="scroll-mt-24">
                    <Hero theme={theme} />
                  </section>
                  <section id="modules" className="scroll-mt-24">
                    <Modules theme={theme} />
                  </section>
                  <section id="features" className="scroll-mt-24">
                    <Features theme={theme} />
                  </section>
                  <section id="comparison" className="scroll-mt-24">
                    <Comparison theme={theme} />
                  </section>
                  <section id="about" className="scroll-mt-24">
                    <About theme={theme} />
                  </section>
                </>
              } />
              <Route path='gallery' element={
                <>
                  <Gallery theme={theme} />
                </>
              } />
             
              <Route path='technologies' element={
                <>
                  <Technologies theme={theme} />
                  <Roadmap theme={theme} />
                </>
              } />
              <Route path='faqs' element={
                <>
                <Stats theme={theme} />
                  <FaqSection theme={theme} />
                </>
              } />
              <Route path='HowItsBuilt' element={
                <>
                  <DevelopmentProcess theme={theme} />
                  <ChallengesSolved theme={theme} />
                </>
              } />
              <Route path='contact' element={
                <>
                  <Contact theme={theme} />
                </>
              } />
             
            </Routes>
          </main>

          {/* Footer */}
          <Footer theme={theme} />

          {/* Floating Action Controls */}
          <FloatingControls theme={theme} />
        </div>
      </BrowserRouter>

    </LanguageProvider>
  );
}
