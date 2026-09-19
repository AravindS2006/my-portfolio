// App.tsx — Modern Light Theme Engineering Portfolio with AI Agent Audit
import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './src/components/ParticleCanvas';
import { DockNavigation } from './src/components/DockNavigation';
import { HeroModern } from './src/components/HeroModern';
import { AIAgentEvaluation } from './src/components/AIAgentEvaluation';
import { ProjectsShowcase } from './src/components/ProjectsShowcase';
import { ProblemSolvingHub } from './src/components/ProblemSolvingHub';
import { SkillsBento } from './src/components/SkillsBento';
import { ExperienceTimeline } from './src/components/ExperienceTimeline';
import { ContactPortal } from './src/components/ContactPortal';
import Footer from './components/Footer';
import RecruiterModal from './components/RecruiterModal';
import { CommandPalette } from './src/components/CommandPalette';
import sound from './src/utils/sound';
import { Zap, Command } from 'lucide-react';

const sectionIds = ['overview', 'evaluation', 'projects', 'metrics', 'skills', 'experience', 'contact'];

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(sound.getMuted());
  const [showFloatingPills, setShowFloatingPills] = useState<boolean>(false);

  const handleToggleSound = () => {
    const nextState = sound.toggleMute();
    setIsMuted(nextState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      setShowFloatingPills(window.scrollY > 400);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Command palette shortcut: Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playSwitch();
        setIsCommandPaletteOpen((prev) => !prev);
        return;
      }

      // Recruiter modal shortcut: R
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;
      if (!isInput && (e.key === 'r' || e.key === 'R') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        sound.playClick();
        setIsRecruiterModalOpen((prev) => !prev);
        return;
      }

      // Escape to close modals
      if (e.key === 'Escape') {
        setIsRecruiterModalOpen(false);
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-indigo-500/15 selection:text-indigo-700 overflow-x-hidden font-sans">
      {/* Dynamic interactive light coordinate web background */}
      <ParticleCanvas />

      {/* Global Ambient Pastel Gradients */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-indigo-100/40 via-blue-50/20 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[700px] h-[450px] bg-gradient-to-t from-emerald-50/30 via-slate-50/10 to-transparent rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Minimalist Light Glass Dock Navigation */}
      <DockNavigation
        activeSection={activeSection}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
      />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* 01. Minimalist Light Hero with Live Status & Metric Bento */}
        <HeroModern
          onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* 02. AI Agent Technical Assessment & Recruiter Dossier */}
        <AIAgentEvaluation />

        {/* 03. Flagship Projects Showcase & Architecture Inspector */}
        <ProjectsShowcase />

        {/* 04. 900+ Problem Solving Proof & Interactive Code Runner */}
        <ProblemSolvingHub />

        {/* 05. Engineering Competency Matrix & Recruiter Transparency */}
        <SkillsBento />

        {/* 06. CoE Space Tech SDR Internship & Academic Foundation */}
        <ExperienceTimeline />

        {/* 07. Friction-Free Recruiter Contact Portal & Resume Download */}
        <ContactPortal />
      </main>

      {/* Global Clean Light Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* 30-Second Recruiter Fast-Track Executive HUD Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />

      {/* Spotlight Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
      />

      {/* Floating Bottom Quick-Action Pill Bar */}
      {showFloatingPills && (
        <div className="fixed bottom-6 right-6 z-40 animate-fadeIn hidden sm:flex items-center gap-2">
          {/* Quick Command Palette Pill */}
          <button
            onClick={() => {
              sound.playSwitch();
              setIsCommandPaletteOpen(true);
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md transition-all text-xs font-mono group"
            title="Command Palette (Ctrl+K / Cmd+K)"
          >
            <Command className="w-3.5 h-3.5 text-brand-indigo group-hover:rotate-12 transition-transform" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-100 border border-slate-200 rounded text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* Quick Recruiter Snapshot Pill */}
          <button
            onClick={() => {
              sound.playClick();
              setIsRecruiterModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-brand-indigo text-white font-bold shadow-md hover:shadow-indigo-500/25 transition-all text-xs font-mono group"
            title="Open 30-Second Recruiter Fast-Track (Press 'R')"
          >
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span>Recruiter Snapshot</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white/20 border border-white/30 rounded text-white font-mono">
              R
            </kbd>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
