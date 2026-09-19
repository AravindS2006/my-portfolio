import React, { useState } from 'react';
import { Award, Trophy, CheckCircle2, ExternalLink, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { achievementsList } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'honors' | 'certs'>('all');

  const filteredItems = achievementsList.filter((item) => {
    if (filter === 'honors') return item.category === 'Grant' || item.category === 'Competition';
    if (filter === 'certs') return item.category === 'Certification' || item.category === 'Coursework';
    return true;
  });

  return (
    <section id="honors" className="py-20 md:py-28 relative bg-[#050711]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-neon-cyan font-mono text-xs tracking-widest uppercase mb-2">
            05. Verified Credentials & Honors
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Honors, Grants & Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 mx-auto rounded-full mb-5" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            External competitive milestones and continuous academic learning verified through standardized assessments and international project grants.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'all'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            All Credentials ({achievementsList.length})
          </button>
          <button
            onClick={() => setFilter('honors')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'honors'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Major Honors & Grants (4)
          </button>
          <button
            onClick={() => setFilter('certs')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'certs'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Industry Certifications & Courses (11)
          </button>
        </div>

        {/* Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isGrantOrFinalist = item.category === 'Grant' || item.category === 'Competition';
            const isGrant = item.category === 'Grant';
            const isFinalist = item.category === 'Competition';

            const cardSpotlight = isGrant
              ? 'rgba(16, 185, 129, 0.18)'
              : isFinalist
              ? 'rgba(168, 85, 247, 0.18)'
              : 'rgba(0, 245, 255, 0.12)';

            return (
              <SpotlightCard
                key={idx}
                spotlightColor={cardSpotlight}
                className={`p-6 flex flex-col text-left group hover:-translate-y-1 ${
                  isGrantOrFinalist
                    ? 'border-cyan-500/30 shadow-[0_0_25px_rgba(0,245,255,0.06)]'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400">{item.issuer}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${
                        isGrant
                          ? 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30'
                          : isFinalist
                          ? 'text-purple-300 bg-purple-500/15 border-purple-500/30'
                          : 'text-slate-300 bg-white/5 border-white/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-neon-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-5 flex-grow">
                  {item.description}
                </p>

                <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-neon-cyan hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

