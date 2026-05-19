import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit, Download } from 'lucide-react';
import { NavItem } from '../types';

interface NavigationProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const resumeUrl = '/assets/resume.pdf';
  const resumeDownloadName = 'Aravindselvan-C-Resume.pdf';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <a 
              href="#home" 
              className="flex items-center gap-2"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <BrainCircuit className="h-7 w-7 text-neon-blue group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold text-xl tracking-wider text-white">
                ARAVIND<span className="text-neon-blue">.AI</span>
              </span>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-neon-blue bg-neon-blue/10 shadow-[0_0_12px_rgba(0,243,255,0.15)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download={resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue rounded-lg text-sm font-medium hover:bg-neon-blue hover:text-dark-bg transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-bg/97 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-neon-blue bg-neon-blue/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download={resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 text-neon-blue font-medium"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
