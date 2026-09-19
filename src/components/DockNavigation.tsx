// src/components/DockNavigation.tsx — Minimalist Light Dock Navigation
import React, { useState, useEffect } from 'react';
import { 
  Terminal, Zap, Download, Search, Volume2, VolumeX, 
  Bot, Layers, Code2, Cpu, Mail, Briefcase, FileText 
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import sound from '../utils/sound';

interface DockNavigationProps {
  activeSection: string;
  onOpenRecruiter: () => void;
  onOpenCommandPalette: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
}

export const DockNavigation: React.FC<DockNavigationProps> = ({
  activeSection,
  onOpenRecruiter,
  onOpenCommandPalette,
  isMuted,
  onToggleSound,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Terminal },
    { id: 'evaluation', label: 'AI Audit', icon: Bot },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'metrics', label: '900+ Solved', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Career', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled 
            ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#overview"
              onClick={(e) => scrollTo(e, 'overview')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm group-hover:bg-brand-indigo transition-colors">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-brand-indigo transition-colors">
                  {personalInfo.fullName}
                </span>
                <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                  Software Developer · Immediate Joining
                </span>
              </div>
            </a>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                sound.playSwitch();
                onOpenCommandPalette();
              }}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-mono transition-colors"
              title="Open Command Palette (Cmd+K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Quick Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded shadow-2xs text-slate-600">
                ⌘K
              </kbd>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              title={isMuted ? 'Unmute Tactile Sound FX' : 'Mute Sound FX'}
              aria-label="Toggle sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-brand-indigo" />}
            </button>

            {/* Resume Download */}
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono font-medium transition-colors"
              title="Download Official PDF Resume"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Resume PDF</span>
            </a>

            {/* Recruiter Fast-Track Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenRecruiter();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-indigo hover:bg-indigo-700 text-white text-xs font-mono font-bold transition-all shadow-sm hover:shadow-md hover:shadow-indigo-500/20"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Recruiter Snapshot</span>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom Dock (Light Minimalist Glass) */}
      <nav
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        aria-label="Main Navigation Dock"
      >
        <div className="glass-dock flex items-center gap-1 p-1.5 rounded-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 text-brand-indigo font-bold shadow-2xs border border-indigo-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-indigo' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default DockNavigation;
