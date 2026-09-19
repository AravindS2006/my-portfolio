import React from 'react';
import { Code2, ExternalLink, Trophy, Flame, CheckCircle, Terminal, Award, Sparkles } from 'lucide-react';
import { codingProfiles } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const additionalProfiles = [
  { name: 'HackerRank', url: 'https://hackerrank.com/aravindselvan201', note: 'Software Engineer Certified' },
  { name: 'HackerEarth', url: 'https://www.hackerearth.com/@aravindselvan2006/', note: 'Verified Member' },
  { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/users/aravindselvanc-2555/', note: 'Azure & AI Learning' },
];

const languageBreakdown = [
  { lang: 'C Programming', count: 259, pct: '38%', color: 'bg-cyan-400', textColor: 'text-cyan-400' },
  { lang: 'Python (3.x)', count: 251, pct: '37%', color: 'bg-emerald-400', textColor: 'text-emerald-400' },
  { lang: 'C++', count: 23, pct: '7%', color: 'bg-blue-400', textColor: 'text-blue-400' },
  { lang: 'SQL / Databases', count: 19, pct: '6%', color: 'bg-purple-400', textColor: 'text-purple-400' },
  { lang: 'JavaScript', count: 15, pct: '5%', color: 'bg-amber-400', textColor: 'text-amber-400' },
];

const CodingMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-neon-cyan font-mono text-xs tracking-widest uppercase mb-2">
            04. Empirical Analytical Rigor
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Problem Solving & Coding Metrics
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 mx-auto rounded-full mb-5" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tangible proof-of-work: over <span className="text-white font-bold">900+ algorithmic challenges solved</span> across competitive platforms,
            anchored by intensive C and Python data structures practice and an international algorithmic tournament finals standing.
          </p>
        </div>

        {/* 4 Aggregate Metric Bento Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <SpotlightCard
            spotlightColor="rgba(245, 158, 11, 0.16)"
            className="p-5 text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-2.5">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">900+</div>
            <div className="text-xs text-slate-200 font-bold uppercase tracking-wider mt-1">Total Challenges</div>
            <div className="text-[11px] text-slate-400">LeetCode & SkillRack</div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(0, 245, 255, 0.16)"
            className="p-5 text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-2.5">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">223</div>
            <div className="text-xs text-slate-200 font-bold uppercase tracking-wider mt-1">Bronze Medals</div>
            <div className="text-[11px] text-slate-400">SkillRack Competitive Track</div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.16)"
            className="p-5 text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-2.5">
              <Flame className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">7,264</div>
            <div className="text-xs text-slate-200 font-bold uppercase tracking-wider mt-1">Diamond League</div>
            <div className="text-[11px] text-slate-400">Google Developer Profile</div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(168, 85, 247, 0.16)"
            className="p-5 text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-2.5">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono">Finalist</div>
            <div className="text-xs text-slate-200 font-bold uppercase tracking-wider mt-1">IMC Prosperity 4</div>
            <div className="text-[11px] text-slate-400">Global Collegiate Finals</div>
          </SpotlightCard>
        </div>

        {/* Language Problem-Solving Distribution Bar */}
        <div className="max-w-5xl mx-auto mb-10 p-6 rounded-2xl bg-[#0a0e24]/80 border border-white/10 backdrop-blur-xl text-left shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan" />
              Verified Language Distribution Across Solved Challenges
            </h3>
            <span className="text-xs font-mono text-slate-400">600+ Tracked Language Submissions</span>
          </div>

          {/* Multi-Segment Color Bar */}
          <div className="h-3.5 w-full rounded-full bg-black/50 overflow-hidden flex mb-4 border border-white/10">
            <div style={{ width: '42%' }} className="bg-cyan-400" title="C: 259 solved" />
            <div style={{ width: '40%' }} className="bg-emerald-400" title="Python: 251 solved" />
            <div style={{ width: '8%' }} className="bg-blue-400" title="C++: 23 solved" />
            <div style={{ width: '5%' }} className="bg-purple-400" title="SQL: 19 solved" />
            <div style={{ width: '5%' }} className="bg-amber-400" title="JavaScript: 15 solved" />
          </div>

          {/* Legend Items */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
            {languageBreakdown.map((item) => (
              <div key={item.lang} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${item.color} flex-shrink-0`} />
                <div className="text-xs font-mono">
                  <span className="text-slate-300 font-medium">{item.lang}</span>
                  <span className="text-slate-500 ml-1">({item.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {codingProfiles.map((profile) => (
            <SpotlightCard
              key={profile.platform}
              spotlightColor="rgba(0, 245, 255, 0.12)"
              className="p-6 flex flex-col text-left group"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {profile.platform}
                    <span className="text-xs font-mono font-normal text-slate-400">@{profile.handle}</span>
                  </h3>
                  <p className="text-xs font-mono text-neon-cyan mt-0.5">{profile.highlight}</p>
                </div>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  title={`Open ${profile.platform} Profile`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Stats Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
                    <div className="text-base sm:text-lg font-bold text-white font-mono mt-0.5">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Badges / Honors */}
              {profile.badges && profile.badges.length > 0 && (
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">Verified Badges & Milestones:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        🏅 {badge}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>

        {/* Additional Verified Platforms Bar */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#0a0e24]/70 border border-white/10 p-5 text-center shadow-md">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Additional Technical Profiles & Standardized Assessments
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {additionalProfiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
              >
                <span>{p.name}</span>
                <span className="text-[10px] text-slate-500">({p.note})</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingMetrics;

