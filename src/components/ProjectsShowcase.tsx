// src/components/ProjectsShowcase.tsx — Bento Projects Showcase & Architecture Inspector (Light Theme)
import React, { useState } from 'react';
import { 
  ExternalLink, Github, Award, CheckCircle2, ChevronRight, 
  X, Cpu, Layers, Sparkles, Code2, AlertCircle, FileText 
} from 'lucide-react';
import { flagshipProjects } from '../../data/portfolioData';
import { Project } from '../../types';
import sound from '../utils/sound';

export const ProjectsShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hardware' | 'fullstack' | 'algo-ml'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all'
      ? flagshipProjects
      : flagshipProjects.filter((p) => p.filterTag === filter);

  const openArchitecture = (project: Project) => {
    sound.playSwitch();
    setActiveProject(project);
  };

  const closeArchitecture = () => {
    sound.playClick();
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-brand-blue text-xs font-mono font-medium mb-3.5 shadow-2xs">
          <Layers className="w-3.5 h-3.5" />
          <span>VERIFIED SYSTEMS & SHIPMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
          Tangible systems spanning <strong className="text-brand-emerald font-semibold">$5,420 IEEE-funded</strong> medical telemetry,
          <strong className="text-brand-blue font-semibold"> international tournament-finalist</strong> numerical algorithms, and high-velocity agentic web products.
        </p>

        {/* Filter Controls */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: `All Projects (${flagshipProjects.length})` },
            { id: 'hardware', label: 'Hardware & IoT' },
            { id: 'algo-ml', label: 'Algorithms & Quant' },
            { id: 'fullstack', label: 'Agentic Full-Stack' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                sound.playClick();
                setFilter(btn.id as any);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                filter === btn.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-card hover:shadow-card-hover p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200/80">
                  {project.category}
                </span>
                {project.badge && (
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${
                    project.badge.includes('$5,420')
                      ? 'bg-emerald-50 text-brand-emerald border-emerald-200'
                      : project.badge.includes('Finalist')
                      ? 'bg-blue-50 text-brand-blue border-blue-200'
                      : 'bg-indigo-50 text-brand-indigo border-indigo-200'
                  }`}>
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-indigo transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">
                {project.period}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs font-mono">
              <button
                onClick={() => openArchitecture(project)}
                className="inline-flex items-center gap-1 text-brand-indigo hover:text-indigo-800 font-bold transition-colors"
              >
                <span>Inspect Architecture</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playBlip()}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playBlip()}
                    className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-brand-indigo transition-colors"
                    title="Open Live Deployment"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Architecture Inspection Modal (Executive Whitepaper Style) */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn"
          onClick={closeArchitecture}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-800 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-indigo">
                  Architecture & Engineering Audit
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  {activeProject.category} · {activeProject.period}
                </p>
              </div>

              <button
                onClick={closeArchitecture}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Badges / Funding */}
            {activeProject.funding && (
              <div className="my-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-brand-emerald flex items-center gap-2 font-bold">
                <Award className="w-4 h-4" />
                <span>Verified Grant Funding: {activeProject.funding}</span>
              </div>
            )}

            {/* Architecture Highlights */}
            <div className="my-5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Technical Highlights & Implementation
              </h4>
              {activeProject.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Honest Build Attribution Note */}
            {activeProject.buildMethodNote && (
              <div className="my-4 p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs font-mono text-slate-600 leading-relaxed">
                🤖 <strong className="text-slate-900">Engineering Method:</strong> {activeProject.buildMethodNote}
              </div>
            )}

            {/* Tech stack */}
            <div className="my-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Production Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                {activeProject.githubLink && (
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository ↗</span>
                  </a>
                )}
                {activeProject.liveLink && (
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-indigo hover:text-indigo-800 font-bold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Platform ↗</span>
                  </a>
                )}
              </div>

              <button
                onClick={closeArchitecture}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-brand-indigo transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsShowcase;
