import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download, Github, Linkedin, Sparkles, Zap } from 'lucide-react';
import { NavItem } from '../types';
import { personalInfo } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
  onOpenRecruiterModal?: () => void;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Problem Solving', href: '#metrics' },
  { label: 'Honors', href: '#honors' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection, onOpenRecruiterModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050711]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, '#overview')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-neon-cyan group-hover:bg-neon-cyan/20 transition-all shadow-inner-glow">
                <Terminal className="w-5 h-5 text-neon-cyan group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-neon-cyan transition-colors">
                  Aravindselvan<span className="text-neon-cyan font-mono">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 -mt-0.5 tracking-wider uppercase">
                  Core Systems · Full-Stack · AI
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const itemId = item.href.substring(1);
              const isActive = activeSection === itemId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-neon-cyan bg-cyan-500/10 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Recruiter Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Recruiter 30s Fast-Track Trigger */}
            <button
              onClick={onOpenRecruiterModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/40 text-white hover:border-cyan-400 hover:scale-[1.02] text-xs font-semibold shadow-sm transition-all group"
              title="Open 30-Second Recruiter Fast-Track (Press 'R')"
            >
              <Zap className="w-3.5 h-3.5 text-neon-cyan group-hover:animate-bounce" />
              <span>Recruiter 30s Snapshot</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-black/40 border border-white/20 rounded text-slate-300">
                R
              </kbd>
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neon-cyan text-dark-bg font-bold rounded-lg text-xs hover:bg-white transition-all shadow-glow-cyan"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>

            {/* Social Icons */}
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRecruiterModal}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-cyan-500/15 border border-cyan-500/30 text-neon-cyan rounded-lg text-xs font-medium"
            >
              <Zap className="w-3 h-3" />
              <span>30s Recruiter</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0e24]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => {
            const itemId = item.href.substring(1);
            const isActive = activeSection === itemId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-neon-cyan bg-cyan-500/15 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenRecruiterModal?.();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-white font-medium text-xs"
            >
              <Zap className="w-4 h-4 text-neon-cyan" />
              <span>Open 30s Recruiter Executive Snapshot</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-neon-cyan text-dark-bg font-bold rounded-xl text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <div className="flex justify-center gap-4 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

