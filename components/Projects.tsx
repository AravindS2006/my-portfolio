import React from 'react';
import { ExternalLink, Github, Zap, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Ghibli Art Generator",
    category: "Generative AI",
    description: "An AI-based application generating Studio Ghibli-style art from text prompts using Stable Diffusion models. Implemented advanced prompt optimization and LoRA fine-tuning to enhance image generation accuracy by 30%.",
    techStack: ["Next.js", "Hugging Face API", "Flux LoRA", "Stable Diffusion"],
    liveLink: "#",
    githubLink: "#",
    stats: "+30% Accuracy"
  },
  {
    title: "Aether Blockchain Viz",
    category: "AI Analytics & NLP",
    description: "AI-powered blockchain visualization tool converting data into 3D analytics. Applied NLP-based summarization for real-time smart contract data insights.",
    techStack: ["React", "Three.js", "Real-time APIs", "NLP", "Data Parsing"],
    liveLink: "#",
    githubLink: "#",
    stats: "Real-time NLP"
  },
  {
    title: "Andromeda Trader Algo",
    category: "FinTech AI",
    description: "AI algorithmic trading system integrating deep learning for pattern recognition. Enhanced model accuracy by 22% through dynamic hyperparameter tuning and backtesting automation.",
    techStack: ["Python", "FastAPI", "React", "Deep Learning", "PyTorch"],
    liveLink: "#",
    githubLink: "#",
    stats: "+22% Profit Opt."
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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-neon-blue">03.</span> Featured Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
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
                    <a href={project.githubLink} className="text-slate-400 hover:text-white transition-colors" title="View Source">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={project.liveLink} className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                    </a>
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

      {/* Suggestion for interaction */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 max-w-2xl mx-auto shadow-xl">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Brain className="text-neon-purple" />
                Interactive AI Demo
            </h4>
            <p className="text-slate-400 text-sm mb-4">
                Explore a simplified version of the Image Generation model running directly in your browser (TensorFlow.js).
            </p>
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors cursor-not-allowed opacity-70">
                Launch Model (Coming Soon)
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;