// src/components/SkillsBento.tsx — Engineering Competency Matrix (Light Theme)
import React, { useState, useMemo } from 'react';
import { 
  Code2, Cpu, Bot, Sparkles, GraduationCap, Wrench, 
  CheckCircle2, Search, AlertCircle, Layers
} from 'lucide-react';
import { skillTiers } from '../../data/portfolioData';
import sound from '../utils/sound';

export const SkillsBento: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconsMap: Record<string, React.ReactNode> = {
    'core-languages': <Code2 className="w-5 h-5 text-brand-cyan" />,
    'hardware-embedded': <Cpu className="w-5 h-5 text-brand-emerald" />,
    'agentic-fullstack': <Bot className="w-5 h-5 text-brand-purple" />,
    'applied-ai': <Sparkles className="w-5 h-5 text-brand-blue" />,
    'developing-exposure': <GraduationCap className="w-5 h-5 text-amber-600" />,
    'developer-tools': <Wrench className="w-5 h-5 text-slate-600" />,
  };

  const filteredTiers = useMemo(() => {
    return skillTiers
      .filter((tier) => activeCategory === 'all' || tier.id === activeCategory)
      .map((tier) => {
        if (!searchQuery.trim()) return tier;
        const q = searchQuery.toLowerCase();
        const matchesTier = tier.title.toLowerCase().includes(q) || tier.description.toLowerCase().includes(q);
        const matchingSkills = tier.skills.filter((s) => s.toLowerCase().includes(q));
        if (matchesTier || matchingSkills.length > 0) {
          return {
            ...tier,
            skills: matchesTier ? tier.skills : matchingSkills,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof skillTiers;
  }, [searchQuery, activeCategory]);

  return (
    <section id="skills" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-brand-cyan text-xs font-mono font-medium mb-3.5 shadow-2xs">
          <Layers className="w-3.5 h-3.5" />
          <span>VERIFIED TECHNICAL COMPETENCY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Engineering Skill Matrix
        </h2>
        <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
          Categorized with <strong className="text-slate-900 font-semibold">100% recruiter transparency</strong>: distinguishing 
          verified core systems, practical hardware telemetry, agentic web engineering, and foundational coursework.
        </p>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, ESP32)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-mono rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => {
                sound.playBlip();
                setActiveCategory('all');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex-shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white font-bold shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All (6)
            </button>
            {skillTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => {
                  sound.playBlip();
                  setActiveCategory(tier.id);
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex-shrink-0 ${
                  activeCategory === tier.id
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tier.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recruiter Integrity Note */}
      <div className="mb-12 p-5 rounded-3xl bg-indigo-50/60 border border-indigo-200/80 shadow-2xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-white border border-indigo-100 text-brand-indigo flex-shrink-0 mt-0.5 sm:mt-0 shadow-2xs">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                Recruiter Integrity Guarantee
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-brand-emerald font-bold">
                  Strictly Verified
                </span>
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Hardware competencies reflect real-world <strong className="text-slate-900">ESP32 sensor telemetry</strong> and <strong className="text-slate-900">SDR RF receiver calibration</strong> (focused on practical IoT hardware prototyping). Web platforms are built directing <strong className="text-slate-900">agentic AI workflows</strong> (Claude Code & Antigravity). Foundational ML/Java subjects are marked as academic coursework.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-brand-emerald bg-white px-3.5 py-1.5 rounded-xl border border-emerald-200 shadow-2xs whitespace-nowrap self-end sm:self-center font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
            <span>0% Resume Fluff</span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTiers.map((tier) => (
          <div
            key={tier.id}
            onMouseEnter={() => sound.playBlip()}
            className="rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors">
                  {iconsMap[tier.id] || <Code2 className="w-5 h-5 text-brand-indigo" />}
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {tier.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-indigo transition-colors tracking-tight">
                {tier.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {tier.description}
              </p>

              {/* Skills Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {tier.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-xs font-mono text-slate-700 hover:text-brand-indigo transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Proof Note */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 group-hover:text-slate-700 flex items-start gap-1.5 transition-colors">
              <span className="text-brand-indigo font-bold">↳</span>
              <span>{tier.transparencyNote}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBento;
