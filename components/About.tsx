import React from 'react';
import { BookOpen, Award, Code2, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-neon-blue">01.</span> About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-slate-300 text-lg leading-relaxed"
        >
          <p>
            I am an <strong className="text-white">AI Engineer and Prompt Engineering Specialist</strong> based in Chennai, India. 
            My passion lies in bridging the gap between theoretical machine learning models and scalable, real-world applications.
          </p>
          <p>
            Currently pursuing my B.E. in Electronics & Communication Engineering, I spearhead AI-driven academic projects focusing on 
            <span className="text-neon-blue"> Generative AI</span>, <span className="text-neon-purple">LLM Fine-Tuning</span>, and 
            <span className="text-neon-blue"> RAG pipelines</span>.
          </p>
          <p>
            I have a proven track record of developing high-accuracy models, such as glaucoma prediction systems (73%+ accuracy) and algorithmic trading bots (+22% accuracy). 
            My workflow integrates advanced prompt optimization with modern full-stack technologies to build intuitive AI-powered web applications.
          </p>
          
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="text-neon-blue" /> Education
            </h3>
            <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all">
              <div className="flex justify-between items-start mb-1">
                <span className="text-white font-medium">B.E. Electronics & Communication Engineering</span>
                <span className="text-slate-400 text-sm">2023 – 2027</span>
              </div>
              <div className="text-slate-400">Sri Sairam Engineering College, Chennai</div>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
            <div className="col-span-1 sm:col-span-2 bg-gradient-to-br from-card-bg to-dark-bg p-6 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="text-neon-purple" /> Certifications
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        Generative AI — <span className="text-slate-500">Google Cloud</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        Machine Learning on AWS — <span className="text-slate-500">Amazon</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        Advanced Prompt Engineering — <span className="text-slate-500">LinkedIn</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        AI for Students — <span className="text-slate-500">LinkedIn</span>
                    </li>
                </ul>
            </div>

            <div className="bg-card-bg p-6 rounded-xl border border-white/10 text-center hover:bg-white/5 transition-all hover:-translate-y-1">
                <Code2 className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-slate-400">Open Source AI Projects</div>
            </div>

            <div className="bg-card-bg p-6 rounded-xl border border-white/10 text-center hover:bg-white/5 transition-all hover:-translate-y-1">
                <BookOpen className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Finalist</div>
                <div className="text-sm text-slate-400">AI Hackathons</div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;