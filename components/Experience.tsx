import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-neon-blue">04.</span> Professional Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
        {/* Item 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 md:pl-12"
        >
          <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-dark-bg bg-neon-blue"></span>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-bold text-white">AI Researcher & Lead Developer</h3>
            <span className="text-sm font-mono text-neon-purple mt-1 sm:mt-0">Present</span>
          </div>
          
          <p className="text-base text-slate-400 mb-4 font-medium">Academic & Innovation Initiatives</p>
          
          <ul className="list-disc list-outside ml-4 text-slate-400 space-y-2 marker:text-neon-blue">
            <li>
                Spearheading AI-driven academic projects focused on generative AI, automation, and ML-based analytics.
            </li>
            <li>
                Developed and deployed multiple AI-powered applications, achieving <span className="text-white font-bold">73%+ accuracy</span> in Glaucoma prediction and screening models using custom CNN architectures.
            </li>
            <li>
                Contributed to institution-level innovation initiatives under the <span className="text-white">YUKTI Innovation Challenge</span> for AI integration in modern education systems.
            </li>
          </ul>
        </motion.div>
      </div>
      
      {/* Achievements Section */}
      <div className="mt-20">
          <motion.h3 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
              <div className="h-px bg-slate-700 flex-1"></div>
              Key Achievements
              <div className="h-px bg-slate-700 flex-1"></div>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card-bg/50 p-6 rounded-lg border border-white/5 hover:bg-white/5 transition-colors"
              >
                <h4 className="text-neon-blue font-bold mb-2">Open Source Impact</h4>
                <p className="text-slate-400 text-sm">Built and published 10+ open-source AI projects on GitHub and Hugging Face Spaces, contributing to the broader developer community.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card-bg/50 p-6 rounded-lg border border-white/5 hover:bg-white/5 transition-colors"
              >
                <h4 className="text-neon-purple font-bold mb-2">Hackathon Finalist</h4>
                <p className="text-slate-400 text-sm">Finalist at national innovation events showcasing AI automation and generative model integration workflows.</p>
              </motion.div>
          </div>
      </div>
    </div>
  );
};

export default Experience;