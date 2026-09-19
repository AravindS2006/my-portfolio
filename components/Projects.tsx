import React, { useState } from 'react';
import { ExternalLink, Github, Award, CheckCircle2, ChevronRight, X, Cpu, Layers, Sparkles, Code2, AlertCircle, Terminal } from 'lucide-react';
import { flagshipProjects } from '../data/portfolioData';
import { Project } from '../types';
import SpotlightCard from './SpotlightCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hardware' | 'fullstack' | 'algo-ml'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all'
      ? flagshipProjects
      : flagshipProjects.filter((p) => p.filterTag === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#050711]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-neon-cyan font-mono text-xs tracking-widest uppercase mb-2">
            03. Flagship Engineering & Systems
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Featured Engineering Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 mx-auto rounded-full mb-5" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tangible, validated systems spanning <span className="text-emerald-400 font-semibold">$5,420 IEEE-funded</span> biomedical hardware telemetry,
            <span className="text-purple-400 font-semibold"> international tournament-finalist</span> numerical algorithms, and high-throughput agentic full-stack platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'all'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            All Projects ({flagshipProjects.length})
          </button>
          <button
            onClick={() => setFilter('hardware')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'hardware'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Hardware & IoT Prototyping
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'fullstack'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Agentic Full-Stack
          </button>
          <button
            onClick={() => setFilter('algo-ml')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'algo-ml'
                ? 'bg-neon-cyan text-dark-bg font-bold shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Algorithmic & Numerical ML
          </button>
        </div>

        {/* Bento Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isAirTon = project.id === 'airton';
            const isIMC = project.id === 'imc-prosperity';
            const spotlightGlow = isAirTon
              ? 'rgba(16, 185, 129, 0.18)'
              : isIMC
              ? 'rgba(168, 85, 247, 0.18)'
              : 'rgba(0, 245, 255, 0.15)';

            return (
              <SpotlightCard
                key={project.id}
                spotlightColor={spotlightGlow}
                className="flex flex-col h-full group hover:-translate-y-1"
              >
                {/* Accent Top Strip */}
                <div
                  className={`h-1.5 w-full ${
                    isAirTon
                      ? 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                      : isIMC
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-gradient-to-r from-neon-cyan via-blue-500 to-purple-500'
                  }`}
                />

                <div className="p-6 flex flex-col flex-grow text-left">
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-neon-cyan px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                          isAirTon
                            ? 'text-emerald-300 bg-emerald-500/15 border-emerald-500/40 shadow-sm'
                            : isIMC
                            ? 'text-purple-300 bg-purple-500/15 border-purple-500/40 shadow-sm'
                            : 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30'
                        }`}
                      >
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Technical Highlights */}
                  <div className="space-y-1.5 mb-5 flex-grow">
                    {project.highlights.slice(0, 2).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-neon-cyan mt-0.5">▸</span>
                        <span className="line-clamp-2">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Agentic Delivery Note if present */}
                  {project.buildMethodNote && (
                    <div className="mb-4 text-[11px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-xl">
                      ⚡ {project.buildMethodNote}
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="flex items-center justify-between gap-3 pt-2 mt-auto">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-neon-cyan hover:text-white transition-colors group/btn"
                    >
                      <span>Deep Architecture</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-neon-cyan hover:text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Deep Dive Architecture Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="relative max-w-2xl w-full max-h-[90vh] bg-[#0a0e24] border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(0,245,255,0.15)] p-6 sm:p-8 overflow-y-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Category & Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-neon-cyan px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  {activeProject.category}
                </span>
                {activeProject.badge && (
                  <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-bold">
                    {activeProject.badge}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {activeProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {activeProject.description}
              </p>

              {/* Technical Execution Breakdown */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technical Architecture & Execution Breakdown
                </h4>
                <ul className="space-y-2.5">
                  {activeProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agentic Note */}
              {activeProject.buildMethodNote && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200 leading-relaxed">
                  <span className="font-semibold text-purple-300 font-mono">Methodology & Tooling: </span>
                  {activeProject.buildMethodNote}
                </div>
              )}

              {/* Stack Pills */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-slate-200 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  {activeProject.githubLink && (
                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-medium transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>
                  )}
                  {activeProject.liveLink && (
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-neon-cyan text-dark-bg font-bold rounded-xl text-xs hover:bg-white transition-all shadow-glow-cyan"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Live App</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

