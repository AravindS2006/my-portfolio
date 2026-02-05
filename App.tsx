import React, { useState, useEffect } from 'react';
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

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact'];
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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

      <footer className="relative z-10 py-8 text-center text-slate-500 text-sm bg-dark-bg/90 backdrop-blur-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Aravindselvan C. All rights reserved.</p>
        <p className="mt-2 text-xs">Innovating with Intelligence — Building Future-Ready AI Solutions.</p>
      </footer>
    </div>
  );
};

export default App;