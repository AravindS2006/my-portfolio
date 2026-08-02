import React from 'react';
import { BookOpen, Award, Code2, GraduationCap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Code2, value: '25+', label: 'End-to-End AI/ML Systems', color: 'text-neon-blue', bg: 'bg-neon-blue/10', border: 'border-neon-blue/20' },
  { icon: Cpu, value: '$5,420', label: 'IEEE Funding (AirTon)', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  { icon: BookOpen, value: '15+', label: 'Certifications', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
];

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-neon-blue font-mono text-sm tracking-widest mb-3">01. ABOUT</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-slate-300 text-base leading-relaxed"
        >
          <p>
            I am a <strong className="text-white">Generative AI Engineer & AI/ML Developer</strong> based in Chennai, Tamil Nadu, India.
            Final-year B.E. ECE student at Sri Sairam Engineering College with hands-on expertise in python programming.
          </p>
          <p>
            I have engineered 25+ end-to-end AI/ML systems spanning RL agents, latent diffusion pipelines, and NLP engines. Secured IEEE funding of <span className="text-neon-blue font-medium">$5,420</span> for the AirTon medical AI prototype and reached the finals of the <span className="text-neon-purple font-medium">IMC Prosperity 4</span> global algorithmic trading competition.
          </p>
          <p>
            Certified by <span className="text-white font-semibold">Google, AWS, IIT Bombay, and NPTEL</span>. My workflow integrates Reinforcement Learning, Generative AI, and modern full-stack technologies to build scalable, real-world AI applications.
          </p>
          
          {/* Education */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <GraduationCap className="text-neon-blue w-5 h-5" /> Education
            </h3>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-all group">
              <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                <span className="text-white font-medium">B.E. – Electronics & Communications Engineering</span>
                <span className="text-neon-blue text-xs font-mono bg-neon-blue/10 px-2 py-1 rounded-full">Sep 2023 – May 2027</span>
              </div>
              <div className="text-slate-400 text-sm">Sri Sairam Engineering College, Chennai</div>
              <div className="text-slate-500 text-xs mt-1">CGPA: 6.95 / 10.0</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-all group mt-3">
              <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                <span className="text-white font-medium">Class 12 – Computer Mathematics</span>
                <span className="text-neon-blue text-xs font-mono bg-neon-blue/10 px-2 py-1 rounded-full">June 2022 – May 2023</span>
              </div>
              <div className="text-slate-400 text-sm">Akshaya Academy Matric Hr. Sec. School, Dindigul</div>
              <div className="text-slate-500 text-xs mt-1">Score: 86% / 100%</div>
            </div>
          </div>

          {/* Key Certifications */}
          <div className="pt-2">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Award className="text-neon-purple w-5 h-5" /> Key Certifications
            </h3>
            <div className="space-y-2">
              {[
                { dot: 'bg-green-400', name: 'Introduction to Generative AI', issuer: 'Google Cloud / Coursera' },
                { dot: 'bg-yellow-400', name: 'Machine Learning on AWS', issuer: 'Amazon Web Services' },
                { dot: 'bg-blue-400', name: 'Advanced C++ (85%) & Java (67.5%)', issuer: 'IIT Bombay' },
                { dot: 'bg-purple-400', name: 'Advanced Prompt Engineering', issuer: 'LinkedIn Learning' },
                { dot: 'bg-pink-400', name: 'Data Science with Python (62%)', issuer: 'NPTEL' },
                { dot: 'bg-orange-400', name: 'Claude Code 101 & AI Fluency', issuer: 'Anthropic / Claude' },
              ].map((cert) => (
                <div key={cert.name} className="flex items-center gap-3 text-sm text-slate-300 py-1.5 px-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${cert.dot} flex-shrink-0`}></div>
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-slate-500 ml-auto text-xs">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border ${item.border} ${item.bg} hover:-translate-y-1 transition-all duration-300 group`}
            >
              <item.icon className={`w-7 h-7 ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
              <div className={`text-3xl font-bold ${item.color} font-mono mb-1`}>{item.value}</div>
              <div className="text-sm text-slate-400 leading-tight">{item.label}</div>
            </motion.div>
          ))}

          {/* What I'm Working On */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="col-span-2 p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-card-bg to-dark-bg hover:border-neon-purple/30 transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-green-400 tracking-wider">CURRENTLY BUILDING</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Building AirTon (IEEE-funded glaucoma detection device), Tradenza RL trading agent for XAUUSD, and the edumate smart student dashboard — while exploring multi-modal LLM applications with real-time inference.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
