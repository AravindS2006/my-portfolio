import React from 'react';
import { Radio, GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-neon-cyan font-mono text-xs tracking-widest uppercase mb-2">
            06. Career Trajectory & Foundations
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Experience & Academic Foundations
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 mx-auto rounded-full mb-5" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hands-on technical internship in satellite communications & software defined radio,
            complemented by strong academic foundations in core computer science & electronic systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4 text-left">
              <div className="p-2 rounded-lg bg-cyan-500/15 text-neon-cyan border border-cyan-500/30">
                <Radio className="w-5 h-5" />
              </div>
              <span>Verified Technical Internship</span>
            </h3>

            {experienceData.map((exp, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(0, 245, 255, 0.16)"
                className="p-6 sm:p-7 text-left group"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-neon-cyan px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 font-semibold">
                    {exp.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-1.5 group-hover:text-neon-cyan transition-colors">
                  {exp.title}
                </h4>

                <div className="text-xs sm:text-sm text-slate-300 mb-5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0" />
                  <span>{exp.organization} · {exp.location}</span>
                </div>

                <ul className="space-y-3 pt-3 border-t border-white/5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>

          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4 text-left">
              <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400 border border-purple-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Academic Background</span>
            </h3>

            {educationData.map((edu, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(168, 85, 247, 0.14)"
                className="p-6 text-left group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-purple-300 font-bold bg-purple-500/15 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                    {edu.score}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{edu.duration}</span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {edu.degree}
                </h4>

                <p className="text-xs text-slate-300 mb-4">
                  {edu.institution}, {edu.location}
                </p>

                {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-neon-cyan" />
                      <span>Key Computer Science Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;