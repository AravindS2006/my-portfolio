import React, { useState } from 'react';
import { Terminal, Cpu, Layers, Sparkles, BookOpen, Wrench, CheckCircle2, AlertCircle, Info, ArrowUpRight } from 'lucide-react';
import { skillTiers } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const iconMap: Record<string, React.ElementType> = {
  'core-languages': Terminal,
  'hardware-embedded': Cpu,
  'agentic-fullstack': Layers,
  'applied-ai': Sparkles,
  'developing-exposure': BookOpen,
  'developer-tools': Wrench,
};

const spotlightColors: Record<string, string> = {
  'core-languages': 'rgba(0, 245, 255, 0.16)',
  'hardware-embedded': 'rgba(16, 185, 129, 0.16)',
  'agentic-fullstack': 'rgba(168, 85, 247, 0.16)',
  'applied-ai': 'rgba(59, 130, 246, 0.16)',
  'developing-exposure': 'rgba(245, 158, 11, 0.14)',
  'developer-tools': 'rgba(148, 163, 184, 0.14)',
};

const Skills: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredTiers =
    selectedTier === 'all'
      ? skillTiers
      : skillTiers.filter((tier) => tier.id === selectedTier);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-neon-cyan font-mono text-xs tracking-widest uppercase mb-2">
            02. Core Competencies & Architecture
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Technical Skills & Systems Matrix
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 mx-auto rounded-full mb-5" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Organized in explicit tiers with 100% ground-truth transparency. Clearly distinguishing between
            core programming fundamentals, hardware sensor telemetry, modern agentic orchestration, and developing coursework.
          </p>
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-[#0a0e24]/90 border border-cyan-500/30 flex items-start gap-4 shadow-[0_0_30px_rgba(0,245,255,0.08)]">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-neon-cyan flex-shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
            <span className="font-bold text-white font-mono">Engineering Recruiter & Hiring Manager Note: </span>
            Full-stack web architectures are delivered by directing and orchestrating modern AI coding tools (Claude Code & Google Antigravity). Hardware execution encompasses ESP32 microcontroller setups, IoT sensor telemetry, and SDR RF signal capture. Foundational coursework topics are explicitly labeled as developing exposure.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedTier('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              selectedTier === 'all'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            All Tiers ({skillTiers.length})
          </button>
          {skillTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedTier === tier.id
                  ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                  : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {tier.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTiers.map((tier) => {
            const Icon = iconMap[tier.id] || Terminal;
            const glowColor = spotlightColors[tier.id] || 'rgba(0, 245, 255, 0.12)';

            return (
              <SpotlightCard
                key={tier.id}
                spotlightColor={glowColor}
                className="p-6 flex flex-col text-left group hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-cyan/50 group-hover:bg-cyan-500/15 transition-all shadow-inner-glow">
                    <Icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <span
                    className={`text-[11px] font-mono px-3 py-1 rounded-full border ${tier.badgeColor}`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {tier.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {tier.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tier.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200 hover:border-cyan-400/40 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Transparency Footnote */}
                {tier.transparencyNote && (
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-400 leading-tight font-mono">
                      {tier.transparencyNote}
                    </span>
                  </div>
                )}
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;