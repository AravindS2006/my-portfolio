import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Tooltip 
} from 'recharts';
import { Brain, Database, Cloud, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

const data = [
  { subject: 'Gen AI', A: 95, fullMark: 100 },
  { subject: 'Prompt Eng', A: 90, fullMark: 100 },
  { subject: 'Python/ML', A: 85, fullMark: 100 },
  { subject: 'Fullstack', A: 80, fullMark: 100 },
  { subject: 'Cloud/Ops', A: 75, fullMark: 100 },
  { subject: 'Data Viz', A: 70, fullMark: 100 },
];

const categories: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    skills: ["Generative AI", "LLM Fine-Tuning", "Prompt Engineering", "RAG Systems", "Model Optimization", "Deep Learning"]
  },
  {
    category: "Programming & Frameworks",
    icon: Terminal,
    skills: ["Python", "JavaScript (React, Next.js)", "TensorFlow", "PyTorch", "FastAPI", "REST API Development"]
  },
  {
    category: "Data Science",
    icon: Database,
    skills: ["Data Preprocessing", "Feature Engineering", "Model Training", "Evaluation Metrics", "Visualization"]
  },
  {
    category: "Cloud & Tools",
    icon: Cloud,
    skills: ["Google Cloud", "Hugging Face", "Docker", "Git/GitHub", "Vercel", "Cursor AI", "n8n Automation"]
  }
];

const Skills: React.FC = () => {
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
          <span className="text-neon-blue">02.</span> Core Competencies
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Radar Chart Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-1 h-[400px] bg-card-bg/50 rounded-2xl border border-white/5 flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
          <h3 className="text-xl font-bold text-white mb-2 z-10">Skill Distribution</h3>
          <div className="w-full h-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#00f3ff"
                  strokeWidth={2}
                  fill="#00f3ff"
                  fillOpacity={0.2}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f1123', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#00f3ff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-blue/20 blur-3xl rounded-full pointer-events-none"></div>
        </motion.div>

        {/* Skill Lists */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card-bg p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 transition-all hover:translate-y-[-5px]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-neon-blue/10 transition-colors">
                  <cat.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs font-mono rounded-full bg-dark-bg border border-white/10 text-slate-300 hover:text-white hover:border-neon-purple/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;