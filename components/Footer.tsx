// components/Footer.tsx — Clean Light Theme Footer
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Download, Terminal, Bot } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import sound from '../src/utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                A
              </div>
              <span className="font-bold text-slate-900 text-sm tracking-tight">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="text-slate-500 max-w-sm text-xs leading-relaxed">
              Software Developer focused on Python systems, hardware telemetry (ESP32/SDR), agentic full-stack delivery, and applied AI.
            </p>
          </div>

          {/* Quick links & Socials */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playBlip()}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all shadow-2xs"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playBlip()}
              className="p-2.5 rounded-xl bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-brand-indigo transition-all shadow-2xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={() => sound.playBlip()}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all shadow-2xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2.5 rounded-xl bg-brand-indigo text-white hover:bg-indigo-700 transition-all shadow-2xs"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 transition-all font-mono text-xs shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-indigo" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 18 · TypeScript · Vite · Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
