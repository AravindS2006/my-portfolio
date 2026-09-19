// src/components/HeroModern.tsx — Clean Light Theme Hero with Verified Metric Bento
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Download, Github, Linkedin, Mail, Check, 
  Copy, Zap, Bot, Terminal, ChevronDown, CheckCircle2 
} from 'lucide-react';
import { personalInfo, aboutSummary } from '../../data/portfolioData';
import sound from '../utils/sound';

interface HeroModernProps {
  onOpenRecruiter: () => void;
  onOpenCommandPalette: () => void;
}

const roles = [
  'Core Systems & Python Pipelines',
  'Agentic Full-Stack Delivery',
  'Hardware & IoT Sensor Telemetry',
  'Algorithmic Problem Solving (900+ Solved)',
];

export const HeroModern: React.FC<HeroModernProps> = ({ onOpenRecruiter, onOpenCommandPalette }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 25 : 50;

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
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Availability Pill */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-brand-emerald text-xs font-mono font-medium shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span>AVAILABLE FOR IMMEDIATE JOINING · 0-DAY NOTICE PERIOD</span>
        </div>
      </div>

      {/* Main Title & Headline */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
          Building Rigorous Software,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-blue to-cyan-600">
            Systems & Applied AI
          </span>
        </h1>

        {/* Dynamic Typewriter Subtitle */}
        <div className="mt-5 h-8 flex items-center justify-center text-sm sm:text-base font-mono text-slate-600 font-medium">
          <span className="text-brand-indigo font-bold mr-2">›</span>
          <span>{text}</span>
          <span className="w-2 h-4 bg-brand-indigo ml-1 animate-pulse" />
        </div>

        {/* Lead Bio paragraph */}
        <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Final-year Electronics & Communication Engineering student at{' '}
          <strong className="text-slate-900 font-semibold">Sri Sairam Engineering College</strong>.
          Recognized as an <strong className="text-slate-900 font-semibold">IMC Prosperity 4 Global Finalist</strong> and recipient of a{' '}
          <strong className="text-brand-emerald font-semibold">$5,420 international IEEE project grant</strong> for the AirTon medical device.
        </p>

        {/* Dual Primary Call-to-Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => {
              sound.playClick();
              onOpenRecruiter();
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-indigo hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm font-mono transition-all shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>30-Second Recruiter Fast-Track</span>
          </button>

          <button
            onClick={() => scrollTo('evaluation')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm font-mono transition-all shadow-sm hover:border-slate-300 hover:-translate-y-0.5"
          >
            <Bot className="w-4 h-4 text-brand-indigo" />
            <span>View AI Candidate Audit (8.9/10)</span>
          </button>

          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-medium text-xs sm:text-sm font-mono transition-all"
            title="Download Official PDF Resume"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Resume (317 KB)</span>
          </a>
        </div>

        {/* Social & Contact Bar */}
        <div className="mt-7 flex items-center justify-center gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <Mail className="w-3.5 h-3.5 text-brand-indigo" />
            <span className="text-slate-700">{personalInfo.email}</span>
            <button
              onClick={handleCopyEmail}
              className="ml-1.5 p-1 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              title="Copy Email"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playBlip()}
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-brand-indigo transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playBlip()}
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 4 Hard Verification Metrics Bento Cards */}
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {/* Metric 1 */}
        <div 
          onClick={() => scrollTo('metrics')}
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>ALGORITHMIC RIGOR</span>
            <span className="text-brand-indigo group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight group-hover:text-brand-indigo transition-colors">
            900+
          </div>
          <div className="text-xs font-semibold text-slate-700 mt-1">Coding Problems Solved</div>
          <div className="text-[11px] text-slate-500 mt-0.5">LeetCode & SkillRack (259 in C)</div>
        </div>

        {/* Metric 2 */}
        <div 
          onClick={() => scrollTo('projects')}
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>RESEARCH GRANT</span>
            <span className="text-brand-emerald group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-brand-emerald font-mono tracking-tight">
            $5,420
          </div>
          <div className="text-xs font-semibold text-slate-700 mt-1">IEEE Project Grant</div>
          <div className="text-[11px] text-slate-500 mt-0.5">AirTon Medical IOP Telemetry</div>
        </div>

        {/* Metric 3 */}
        <div 
          onClick={() => scrollTo('projects')}
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>GLOBAL ALGORITHMS</span>
            <span className="text-brand-blue group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-brand-blue font-mono tracking-tight">
            Finalist
          </div>
          <div className="text-xs font-semibold text-slate-700 mt-1">IMC Prosperity 4</div>
          <div className="text-[11px] text-slate-500 mt-0.5">International Collegiate Finals</div>
        </div>

        {/* Metric 4 */}
        <div 
          onClick={() => scrollTo('metrics')}
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>GOOGLE SKILLS</span>
            <span className="text-brand-indigo group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
            7,264
          </div>
          <div className="text-xs font-semibold text-slate-700 mt-1">Diamond League Member</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Google Developer Profile</div>
        </div>
      </div>
    </section>
  );
};

export default HeroModern;
