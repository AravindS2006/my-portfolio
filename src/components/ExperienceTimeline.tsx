// src/components/ExperienceTimeline.tsx — Experience & Education (Light Theme)
import React, { useState } from 'react';
import { 
  Briefcase, GraduationCap, Award, Radio, Calendar, 
  MapPin, CheckCircle, ExternalLink 
} from 'lucide-react';
import { experienceData, educationData, achievementsList } from '../../data/portfolioData';
import sound from '../utils/sound';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'achievements'>('experience');

  return (
    <section id="experience" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-3.5 shadow-2xs">
          <Briefcase className="w-3.5 h-3.5 text-brand-indigo" />
          <span>CAREER TRAJECTORY & ACADEMICS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Experience & Academic Foundation
        </h2>
        <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
          Hands-on hardware & SDR research, competitive programming milestones, and rigorous engineering coursework.
        </p>

        {/* Tab switchers */}
        <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('experience');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'experience'
                ? 'bg-white text-slate-900 font-bold shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-brand-indigo" />
            <span>Internship & Research ({experienceData.length})</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('education');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'education'
                ? 'bg-white text-slate-900 font-bold shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-brand-blue" />
            <span>Education ({educationData.length})</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('achievements');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'achievements'
                ? 'bg-white text-slate-900 font-bold shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Honors & Certs ({achievementsList.length})</span>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto">
        {/* EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fadeIn">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-brand-indigo text-xs font-mono mb-2 font-semibold">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>{exp.badge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-1">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 gap-1">
                    <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-brand-indigo" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="mt-5 space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-slate-400">Hardware & Toolchain:</span>
                  {['Software Defined Radio (SDR)', '435 MHz Dipole Antenna', 'RF Spectrum Analysis', 'Linux POSIX', 'Satellite Pass Tracking', 'HAM Radio Frequency'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EDUCATION TAB */}
        {activeTab === 'education' && (
          <div className="space-y-6 animate-fadeIn">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono gap-1">
                    <span className="text-slate-700 flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-brand-indigo" />
                      {edu.duration}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-brand-emerald font-bold">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {edu.relevantCoursework && (
                  <div className="mt-5">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-semibold">
                      Core Academic Coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.note && (
                  <div className="mt-4 p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs font-mono text-slate-700">
                    💡 {edu.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ACHIEVEMENTS TAB */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
            {achievementsList.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-50 border border-indigo-200 text-brand-indigo">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      {item.issuer}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-indigo hover:text-indigo-800 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
