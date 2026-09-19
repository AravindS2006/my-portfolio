import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Check, Copy, Zap, ChevronDown, Award, Sparkles, Terminal } from 'lucide-react';
import { personalInfo, aboutSummary } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import InteractiveTerminal from './InteractiveTerminal';

interface HeroProps {
  onOpenRecruiterModal?: () => void;
}

const roles = [
  'Core Systems & Python Pipelines',
  'Agentic Full-Stack Delivery',
  'Hardware & IoT Sensor Prototyping',
  'Algorithmic Problem Solving (900+ Solved)',
];

const Hero: React.FC<HeroProps> = ({ onOpenRecruiterModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2200);
        return;
      }
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability Status Badge with Recruiter Trigger */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0e24]/90 border border-emerald-500/30 backdrop-blur-xl mb-7 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
            AVAILABLE FOR IMMEDIATE HIRE · CHENNAI / REMOTE / RELOCATION
          </span>
        </div>

        {/* Candidate Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4">
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {personalInfo.fullName}
          </span>
        </h1>

        {/* Animated Typing Subtitle */}
        <div className="h-12 flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-black/40 border border-white/10 font-mono text-sm sm:text-xl text-slate-200">
            <span className="text-neon-cyan font-bold font-mono">{">"}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-purple-400 font-semibold">
              {text}
            </span>
            <span className="inline-block w-2 h-5 bg-neon-cyan animate-pulse align-middle" />
          </div>
        </div>

        {/* Professional Summary Narrative */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal">
          {aboutSummary.leadText} Awarded{' '}
          <span className="text-neon-cyan font-semibold border-b border-neon-cyan/40">
            $5,420 in competitive international IEEE grant funding
          </span>{' '}
          for the AirTon medical prototype, recognized as an{' '}
          <span className="text-purple-400 font-semibold border-b border-purple-400/40">
            IMC Prosperity 4 Global Finalist
          </span>
          , with over <span className="text-amber-400 font-semibold">900+ coding challenges solved</span>.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          {/* Primary Projects CTA */}
          <button
            onClick={() => handleScrollToSection('projects')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-neon-cyan text-dark-bg font-extrabold rounded-xl shadow-glow-cyan hover:bg-white hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
          >
            <span>Explore Flagship Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Recruiter Fast-Track Button */}
          <button
            onClick={onOpenRecruiterModal}
            className="group inline-flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-purple-500/40 hover:border-cyan-400 rounded-xl font-bold transition-all duration-200 text-xs sm:text-sm shadow-sm hover:scale-105"
          >
            <Zap className="w-4 h-4 text-neon-cyan group-hover:animate-bounce" />
            <span>Recruiter 30s Snapshot</span>
          </button>

          {/* Resume Download */}
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/5 text-white border border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 rounded-xl font-medium transition-all duration-200 text-xs sm:text-sm shadow-sm"
          >
            <Download className="w-4 h-4 text-neon-cyan" />
            <span>Download Resume</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3.5 bg-white/5 text-slate-300 border border-white/10 hover:border-slate-400 hover:text-white rounded-xl text-xs sm:text-sm font-mono transition-all"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span className="text-xs">{personalInfo.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Bento Live Proof-of-Work Metric Cards (With Spotlight) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          <SpotlightCard
            spotlightColor="rgba(0, 245, 255, 0.16)"
            className="p-5 text-left group"
          >
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:text-neon-cyan transition-colors">
              900+
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wide">
              Problems Solved
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              LeetCode (212+) & SkillRack (691)
            </div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.16)"
            className="p-5 text-left group"
          >
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
              $5,420
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wide">
              IEEE Grant Funding
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              AirTon Biomedical Prototype
            </div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(168, 85, 247, 0.16)"
            className="p-5 text-left group"
          >
            <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono tracking-tight group-hover:text-purple-300 transition-colors">
              Finalist
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wide">
              IMC Prosperity 4
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Global Algorithmic Challenge
            </div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.16)"
            className="p-5 text-left group"
          >
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono tracking-tight group-hover:text-blue-300 transition-colors">
              7,264
            </div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wide">
              Diamond League
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Google Developer Program
            </div>
          </SpotlightCard>
        </div>

        {/* Interactive Multi-Tab Developer Console */}
        <div className="mb-14">
          <InteractiveTerminal />
        </div>

        {/* Scroll Down Hint */}
        <div className="flex flex-col items-center gap-1.5 text-slate-500">
          <span className="text-[11px] font-mono tracking-widest uppercase">
            Explore Verified Engineering Competencies
          </span>
          <button
            onClick={() => handleScrollToSection('skills')}
            className="p-1.5 text-slate-400 hover:text-neon-cyan transition-colors"
            aria-label="Scroll down to Skills"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

