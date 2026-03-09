import React from 'react';
import { BookOpen, Award, Code2, GraduationCap, Trophy, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Code2, value: '10+', label: 'Open Source AI Projects', color: 'text-neon-blue', bg: 'bg-neon-blue/10', border: 'border-neon-blue/20' },
  { icon: Trophy, value: 'Finalist', label: 'AI Hackathons', color: 'text-neon-purple', bg: 'bg-neon-purple/10', border: 'border-neon-purple/20' },
  { icon: Cpu, value: '73%+', label: 'Model Accuracy', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  { icon: BookOpen, value: '10+', label: 'Certifications', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
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
            I am an <strong className="text-white">AI Engineer and Prompt Engineering Specialist</strong> based in Chennai, India. 
            My passion lies in bridging the gap between theoretical machine learning models and scalable, real-world applications.
          </p>
          <p>
            Currently pursuing my B.E. in Electronics & Communication Engineering, I spearhead AI-driven academic projects focusing on 
            <span className="text-neon-blue font-medium"> Generative AI</span>, <span className="text-neon-purple font-medium">LLM Fine-Tuning</span>, and 
            <span className="text-neon-blue font-medium"> RAG pipelines</span>.
          </p>
          <p>
            I have a proven track record of developing high-accuracy models, including glaucoma prediction systems achieving <span className="text-white font-semibold">73%+ accuracy</span> and algorithmic trading bots with <span className="text-white font-semibold">+22% accuracy improvements</span>. 
            My workflow integrates advanced prompt optimization with modern full-stack technologies to build intuitive AI-powered web applications.
          </p>
          
          {/* Education */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <GraduationCap className="text-neon-blue w-5 h-5" /> Education
            </h3>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-all group">
              <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                <span className="text-white font-medium">B.E. Electronics & Communication Engineering</span>
                <span className="text-neon-blue text-xs font-mono bg-neon-blue/10 px-2 py-1 rounded-full">2023 – 2027</span>
              </div>
              <div className="text-slate-400 text-sm">Sri Sairam Engineering College, Chennai</div>
            </div>
          </div>

          {/* Key Certifications */}
          <div className="pt-2">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Award className="text-neon-purple w-5 h-5" /> Key Certifications
            </h3>
            <div className="space-y-2">
              {[
                { dot: 'bg-green-400', name: 'Generative AI', issuer: 'Google Cloud' },
                { dot: 'bg-yellow-400', name: 'Machine Learning on AWS', issuer: 'Amazon' },
                { dot: 'bg-blue-400', name: 'Advanced Prompt Engineering', issuer: 'LinkedIn' },
                { dot: 'bg-purple-400', name: 'AI for Students', issuer: 'LinkedIn' },
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
              AI-powered education platforms, algorithmic trading systems with deep learning, and exploring multi-modal LLM applications with real-time inference.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;