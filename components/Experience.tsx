import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

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
        <p className="text-neon-blue font-mono text-sm tracking-widest mb-3">03. EXPERIENCE</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
        {/* ML Internship */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 md:pl-12"
        >
          <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-dark-bg bg-neon-blue"></span>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-white">Machine Learning Intern</h3>
            <span className="text-sm font-mono text-neon-purple mt-1 sm:mt-0">Nov – Dec 2023</span>
          </div>
          
          <p className="text-base text-slate-400 mb-1 font-medium">Prodigy InfoTech (Remote)</p>
          <p className="text-xs text-slate-600 mb-4 font-mono">Ref: CIN PIT/NOV23/3787</p>
          
          <ul className="list-disc list-outside ml-4 text-slate-400 space-y-2 marker:text-neon-blue">
            <li>
              Developed and evaluated supervised regression models for housing price prediction; received outstanding performance remarks.
            </li>
            <li>
              Built end-to-end Python ML pipelines — data preprocessing, feature engineering, model training, hyperparameter tuning — across <span className="text-white font-bold">5+ algorithms</span>.
            </li>
          </ul>
        </motion.div>
      </div>
      
      {/* Achievements & Competitions Section */}
      <div className="mt-20">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
        >
          <div className="h-px bg-slate-700 flex-1"></div>
          Achievements & Competitions
          <div className="h-px bg-slate-700 flex-1"></div>
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'IMC Prosperity 4', desc: 'Finalist, Global Algorithmic Trading Competition', color: 'text-yellow-400' },
            { title: 'AirTon Medical Device', desc: 'Awarded $5,420 IEEE funding for AI-based glaucoma detection prototype', color: 'text-green-400' },
            { title: 'MSME Hackathon 2024', desc: 'Top 50 teams nationally', color: 'text-neon-blue' },
            { title: 'Smart India Hackathon 2025', desc: 'Wait-listed', color: 'text-neon-purple' },
            { title: 'Google Solution Challenge', desc: 'Participant, GDSC | Flipkart GRiD 6.0 — Level 1 cleared | Adobe India Hackathon — Round 1 qualified', color: 'text-blue-400' },
            { title: 'Google Tunix Hackathon', desc: 'AI Lead, Model Fine-Tuning | Global Virtual Summit 2024 — Delegate, GELP', color: 'text-orange-400' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-bg/50 p-5 rounded-lg border border-white/5 hover:bg-white/5 transition-colors flex gap-3"
            >
              <Trophy className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.color}`} />
              <div>
                <h4 className={`font-bold mb-1 ${item.color}`}>{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;