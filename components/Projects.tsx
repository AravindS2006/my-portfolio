import React from 'react';
import { ExternalLink, Github, Zap, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "AirTon — Handheld Medical AI Device",
    category: "AI / IoT / Healthcare",
    description: "ML-powered hardware prototype for non-invasive glaucoma screening via IOP detection. Integrated real-time sensor data pipelines with custom ESP32 firmware for live biometric capture and on-device classification. Awarded IEEE funding of $5,420.",
    techStack: ["Python", "TensorFlow", "ESP32", "Computer Vision", "IoT"],
    githubLink: "https://github.com/AravindS2006/airton-web-final",
    stats: "IEEE Funded: $5,420"
  },
  {
    title: "Tradenza — RL Trading Agent (XAUUSD)",
    category: "FinTech / Reinforcement Learning",
    description: "Autonomous RL trading agent for XAUUSD with custom reward functions incorporating Sharpe Ratio and max-drawdown metrics. Full backtesting pipeline — agent generates buy/sell/hold signals with zero manual intervention.",
    techStack: ["Python", "TensorFlow", "Reinforcement Learning", "Pandas", "NumPy"],
    githubLink: "https://github.com/AravindS2006/Tradenza",
    stats: "Zero-intervention signals"
  },
  {
    title: "Ghibli Art Generator",
    category: "Generative AI",
    description: "Text-to-image & image-to-image pipeline with SDXL + LoRA fine-tuning for high-fidelity Studio Ghibli style transfer. Deployed public demo on Hugging Face Spaces via Gradio with zero infrastructure overhead.",
    techStack: ["Python", "PyTorch", "Stable Diffusion SDXL/SD 1.5", "LoRA", "Hugging Face Diffusers", "Gradio"],
    liveLink: "https://ghibli-art-generator-five.vercel.app",
    githubLink: "https://github.com/AravindS2006/ghibli-art-generator",
    stats: "HF Spaces Deployed"
  },
  {
    title: "edumate — Smart Student Dashboard",
    category: "Full-Stack / EdTech",
    description: "Mobile-optimized student dashboard for Sri Sairam Engineering College with real-time attendance and data visualization. Achieved <2s load times across Vercel (frontend) + Render (Python FastAPI backend) deployment stack.",
    techStack: ["TypeScript", "React.js", "Node.js", "FastAPI", "Python", "Vercel", "Render"],
    liveLink: "https://edumate1-sairam.vercel.app/",
    githubLink: "https://github.com/AravindS2006/edumate",
    stats: "<2s Load Time"
  },
  {
    title: "Resume-Architect",
    category: "NLP / AI Tools",
    description: "End-to-end NLP pipeline that parses, scores, and benchmarks resumes against job descriptions using LLM embeddings and vector similarity deployed via Google AI Studio.",
    techStack: ["Python", "Gemini API", "LLMs", "Vector Databases", "Google AI Studio"],
    githubLink: "https://github.com/AravindS2006/Resume-Architect",
    stats: "LLM Embeddings"
  },
  {
    title: "Health Monitoring & Blockchain Visualizer",
    category: "AI Analytics / Web",
    description: "Real-time health monitoring web app with biometric alert thresholds; created an interactive blockchain visualizer using HTML5 Canvas animations.",
    techStack: ["JavaScript", "Node.js", "REST APIs", "HTML5 Canvas"],
    liveLink: "https://aravinds2006-blockchain-visualization.static.hf.space/index.html",
    githubLink: "https://github.com/AravindS2006/Blockchain-Visualization",
    stats: "Real-time Biometrics"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-neon-blue font-mono text-sm tracking-widest mb-3">04. PROJECTS</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">A selection of AI-powered applications and tools I've built — from generative models to full-stack platforms.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative bg-card-bg rounded-xl overflow-hidden border border-white/5 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-purple/10 flex flex-col hover:-translate-y-2"
          >
            {/* Top Bar / Decoration */}
            <div className="h-2 w-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-75"></div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                 <div className="px-3 py-1 rounded-full bg-white/5 text-xs text-neon-blue border border-neon-blue/20 font-mono">
                    {project.category}
                 </div>
                 <div className="flex gap-3">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Source">
                          <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                          <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Stats Badge */}
              {project.stats && (
                  <div className="mb-4 flex items-center gap-2 text-sm text-green-400 font-mono">
                      <Zap className="w-4 h-4" />
                      {project.stats}
                  </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-slate-500 font-mono">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* CTA to GitHub */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-white/10 max-w-2xl mx-auto shadow-xl backdrop-blur">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Brain className="text-neon-purple" />
                Want to see more?
            </h4>
            <p className="text-slate-400 text-sm mb-5">
                Explore all my open-source AI projects, tools, and experiments on GitHub and Hugging Face.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a 
                href="https://github.com/AravindS2006" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
              <a 
                href="https://huggingface.co/AravindS2006" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/20 rounded-lg text-sm font-medium transition-all hover:scale-105"
              >
                🤗 Hugging Face
              </a>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
