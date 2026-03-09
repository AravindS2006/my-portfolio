import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  'AI Engineer & Prompt Engineering Specialist',
  'Generative AI Developer',
  'LLM Fine-Tuning Expert',
  'Full-Stack AI Builder',
];

const stats = [
  { value: 10, suffix: '+', label: 'AI Projects' },
  { value: 73, suffix: '%', label: 'Model Accuracy' },
  { value: 22, suffix: '%', label: 'Trading Gain' },
  { value: 10, suffix: '+', label: 'Certifications' },
];

const useCountUp = (target: number, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatCard: React.FC<{ value: number; suffix: string; label: string; delay: number; startCount: boolean }> = ({ value, suffix, label, delay, startCount }) => {
  const count = useCountUp(value, 1200, startCount);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-colors"
    >
      <div className="text-2xl font-bold text-white font-mono">
        {count}{suffix}
      </div>
      <div className="text-xs text-slate-400 mt-0.5">{label}</div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Typewriter with multiple roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 30 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursor);
  }, []);

  // Start counter when hero is in view
  useEffect(() => {
    const timer = setTimeout(() => setStartCount(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center z-10">
      
      {/* Status Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-mono text-green-400 tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
      >
        Aravindselvan C
      </motion.h1>

      {/* Typewriter subtitle */}
      <div className="h-16 sm:h-12 flex items-center justify-center mb-6">
        <h2 className="text-xl md:text-3xl font-light text-slate-300 font-mono">
          <span className="text-neon-blue">{">"}</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{text}</span>
          <span className="ml-1 text-neon-blue font-bold" style={{ opacity: showCursor ? 1 : 0 }}>_</span>
        </h2>
      </div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-2xl text-base text-slate-400 mb-8 leading-relaxed"
      >
        Innovating with Intelligence — Building Future-Ready AI Solutions. Specializing in Generative AI, LLM fine-tuning, RAG pipelines, and integrating deep learning into scalable production environments.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-12"
      >
        <a 
          href="#projects"
          onClick={handleScrollToProjects}
          className="group relative inline-flex items-center gap-2 px-7 py-3 bg-neon-blue text-dark-bg font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(0,243,255,0.45)]"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative">View Projects</span>
          <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
        </a>

        <a 
          href="https://drive.google.com/drive/folders/1xgVNp1OqPbIrNg1TXqFijczpd2VQ-gTk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 bg-white/5 text-white border border-white/15 rounded-full hover:bg-neon-purple/10 hover:border-neon-purple/50 transition-all"
        >
          <Download className="w-4 h-4 text-neon-purple" />
          <span>Resume</span>
        </a>

        <a 
          href="https://www.linkedin.com/in/aravindselvan-c/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 hover:border-neon-blue/30 transition-all"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/AravindS2006" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mb-12"
      >
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={1 + i * 0.1} startCount={startCount} />
        ))}
      </motion.div>

      {/* Terminal Preview */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="w-full max-w-3xl bg-card-bg/50 backdrop-blur border border-white/5 rounded-xl overflow-hidden shadow-2xl hidden md:block"
      >
        <div className="flex items-center px-4 py-2.5 bg-black/40 border-b border-white/5 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <div className="ml-3 text-xs text-slate-500 font-mono">aravind@ai-core:~/projects</div>
        </div>
        <div className="p-6 text-left font-mono text-sm text-slate-300 space-y-2">
          <div className="flex">
            <span className="text-neon-purple mr-2">➜</span>
            <span className="text-neon-blue mr-2">~</span>
            <span>python3 model_training.py --optimize --epochs 50</span>
          </div>
          <div className="text-slate-400 pl-4 space-y-1">
            <div><span className="text-yellow-400">[INFO]</span> Loading pre-trained weights...</div>
            <div><span className="text-blue-400">[INFO]</span> Initializing RAG pipeline with Gemini 2.5 Flash...</div>
            <div><span className="text-green-400">[SUCCESS]</span> Model accuracy improved by <span className="text-white font-bold">22%</span></div>
            <div><span className="text-green-400">[READY]</span> Interactive inference engine online.</div>
          </div>
          <div className="flex animate-pulse">
            <span className="text-neon-purple mr-2">➜</span>
            <span className="text-neon-blue mr-2">~</span>
            <span className="w-2 h-4 bg-slate-400 block mt-0.5"></span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={handleScrollToAbout}
        className="mt-12 flex flex-col items-center gap-1 text-slate-500 hover:text-neon-blue transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-neon-blue" />
      </motion.button>
    </div>
  );
};

export default Hero;