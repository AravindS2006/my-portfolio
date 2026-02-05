import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "AI Engineer & Prompt Engineering Specialist";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center z-10">
      
      {/* Decorative Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-mono text-green-400 tracking-wider">SYSTEM ONLINE</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
      >
        Aravindselvan C
      </motion.h1>
      
      <div className="h-20 sm:h-24 md:h-16 flex items-center justify-center mb-8">
         <h2 className="text-2xl md:text-4xl font-light text-slate-300 font-mono">
          <span className="text-neon-blue">{">"}</span> {text}
          <span className="ml-1 text-neon-blue font-bold" style={{ opacity: showCursor ? 1 : 0 }}>_</span>
        </h2>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed"
      >
        Innovating with Intelligence — Building Future-Ready AI Solutions.
        Specializing in Generative AI, LLM fine-tuning, RAG pipelines, and integrating deep learning into scalable production environments.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a 
          href="#projects"
          onClick={handleScrollToProjects}
          className="group relative inline-flex items-center gap-2 px-8 py-3 bg-neon-blue text-dark-bg font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative">View Projects</span>
          <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
        </a>

        <a 
          href="https://www.linkedin.com/in/aravindselvan-c/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 hover:border-neon-purple/50 transition-all"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/AravindS2006" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </motion.div>

      {/* Terminal Preview */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 w-full max-w-3xl bg-card-bg/50 backdrop-blur border border-white/5 rounded-lg overflow-hidden shadow-2xl hidden md:block"
      >
        <div className="flex items-center px-4 py-2 bg-black/40 border-b border-white/5 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-2 text-xs text-slate-500 font-mono">aravind@ai-core:~/projects</div>
        </div>
        <div className="p-6 text-left font-mono text-sm text-slate-300 space-y-2">
          <div className="flex">
            <span className="text-neon-purple mr-2">➜</span>
            <span className="text-neon-blue mr-2">~</span>
            <span>python3 model_training.py --optimize</span>
          </div>
          <div className="text-slate-400 pl-4">
            [INFO] Loading pre-trained weights...<br/>
            [INFO] Initializing RAG pipeline...<br/>
            [SUCCESS] Model accuracy improved by 22%<br/>
            [READY] Interactive inference engine online.
          </div>
          <div className="flex animate-pulse">
             <span className="text-neon-purple mr-2">➜</span>
            <span className="text-neon-blue mr-2">~</span>
            <span className="w-2 h-4 bg-slate-400 block"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;