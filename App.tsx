import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    // Brief delay lets the exit animation complete before showing content
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }

      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      <LoadingScreen onComplete={handleLoadingComplete} />

      <div className={`min-h-screen relative overflow-x-hidden transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Neural Network Effect */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/80 to-dark-bg pointer-events-none"></div>
        </div>

        <Navigation activeSection={activeSection} />

        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <Hero />
          </section>

          <section id="about" className="py-20 lg:py-32">
            <About />
          </section>

          <section id="skills" className="py-20 lg:py-32">
            <Skills />
          </section>

          <section id="experience" className="py-20 lg:py-32">
            <Experience />
          </section>

          <section id="projects" className="py-20 lg:py-32">
            <Projects />
          </section>

          <section id="certificates" className="py-20 lg:py-32">
            <Certificates />
          </section>

          <section id="testimonials" className="py-20 lg:py-32">
            <Testimonials />
          </section>

          <section id="contact" className="py-20 lg:py-32">
            <Contact />
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="relative z-10 py-12 bg-dark-bg/90 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="font-bold text-xl tracking-wider text-white">
                  ARAVIND<span className="text-neon-blue">.AI</span>
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-500 text-sm font-mono">Generative AI Engineer | AI/ML Developer</span>
              </div>
              <div className="text-center md:text-right">
                <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Aravindselvan C. All rights reserved.</p>
                <p className="mt-1 text-xs text-slate-600">Engineered 25+ AI/ML systems — RL agents, diffusion pipelines, NLP engines.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              key="scroll-top"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-colors shadow-lg hover:shadow-neon-blue/40"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;