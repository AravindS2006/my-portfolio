// components/RecruiterModal.tsx — 30-Second Recruiter Fast-Track HUD (Light Theme)
import React, { useState, useEffect } from 'react';
import { 
  X, Download, Copy, Check, Mail, Phone, ExternalLink, 
  Sparkles, Award, Code2, Cpu, FileText, CheckCircle2, Zap 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import sound from '../src/utils/sound';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const candidateBrief = `Aravindselvan C — Software Developer (Core Systems, Full-Stack & Applied AI)
• Education: B.E. ECE (Sri Sairam Engineering College, 2023–2027) | Class XII: 86.0%
• Highlights: $5,420 IEEE Project Grant Recipient (AirTon) | IMC Prosperity 4 Global Finalist | Google Diamond League (7,264 pts)
• Coding Rigor: 900+ Solved Challenges (LeetCode 212+, SkillRack 691 with 259 in pure C, 223 Bronze Medals)
• Core Stack: Python, C, C++, Data Structures & Algorithms, ESP32 Sensor Telemetry, SDR Signal Analysis, Next.js, React, TypeScript, Agentic AI Tool Orchestration
• Availability: Immediate Fresher Joining (0-Day Notice) · Open to Relocation & Remote
• Direct Contact: aravindselvan2006@gmail.com | +91 8668147238 | https://linkedin.com/in/aravindselvan-c`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(candidateBrief);
    sound.playSuccess();
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    sound.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-left text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-brand-indigo text-xs font-mono font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-indigo animate-ping" />
              <span>RECRUITER FAST-TRACK · 30-SECOND EXECUTIVE DOSSIER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {personalInfo.fullName}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-600 mt-1">
              {personalInfo.headline} · <span className="text-brand-emerald font-bold">Immediate Fresher Joining (0 Days)</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors flex-shrink-0"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Hard Verification Metrics Bento */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-2xl font-black text-slate-900 font-mono">900+</div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">Problems Solved</div>
            <div className="text-[10px] text-slate-500 font-mono">LeetCode & SkillRack</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div className="text-2xl font-black text-brand-emerald font-mono">$5,420</div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">IEEE Grant Recipient</div>
            <div className="text-[10px] text-slate-500 font-mono">AirTon Prototype</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200">
            <div className="text-2xl font-black text-brand-blue font-mono">Finalist</div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">IMC Prosperity 4</div>
            <div className="text-[10px] text-slate-500 font-mono">Global Finalist</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200">
            <div className="text-2xl font-black text-brand-indigo font-mono">7,264</div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">Diamond League</div>
            <div className="text-[10px] text-slate-500 font-mono">Google Developer</div>
          </div>
        </div>

        {/* Executive Summary Points */}
        <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm leading-relaxed mb-5">
          <div className="flex items-start gap-2.5">
            <span className="text-brand-indigo font-bold mt-0.5">▸</span>
            <p>
              <strong className="text-slate-900">Target Roles:</strong> Fresher Software Engineer, Core Systems / Python Developer, Applied AI / ML Pipeline Engineer, IoT Systems Engineer.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-brand-indigo font-bold mt-0.5">▸</span>
            <p>
              <strong className="text-slate-900">Hardware & Systems Prototyping:</strong> Awarded $5,420 in competitive international IEEE student funding for fabricating the <em>AirTon</em> handheld non-invasive intraocular pressure device (ESP32 telemetry, pressure sensors, biometric pipelines). Hands-on 435 MHz antenna calibration and SDR satellite pass tracking.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-brand-indigo font-bold mt-0.5">▸</span>
            <p>
              <strong className="text-slate-900">Modern Agentic Full-Stack Delivery:</strong> Rapidly architects and ships production-grade web products (edumate, Ghibli Art Generator) by directing AI coding agents (Claude Code, Google Antigravity) with TypeScript, Next.js, and REST APIs.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-brand-indigo font-bold mt-0.5">▸</span>
            <p>
              <strong className="text-slate-900">Location & Availability:</strong> Chennai, Tamil Nadu · Open to Bangalore, Hyderabad, Pune, Gurgaon, or Remote. Available for immediate onboarding.
            </p>
          </div>
        </div>

        {/* Core Stack Pills */}
        <div className="mb-6">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
            Verified Stack & Toolchain
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Python', 'C', 'C++', 'Data Structures & Algorithms', 'ESP32 Microcontrollers', 'SDR Signal Analysis', 'TypeScript', 'Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Claude Code', 'Google Antigravity', 'Git', 'Linux POSIX'].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-100">
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-indigo hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm font-mono transition-all shadow-md shadow-indigo-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume (PDF · 317 KB)</span>
          </a>

          <button
            onClick={handleCopyBrief}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm font-mono transition-all"
          >
            {copiedBrief ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Brief Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>Copy 1-Paragraph Brief (For Slack/Email)</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Shortcuts Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 pt-4 mt-4 border-t border-slate-100 gap-2">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-800 hover:text-brand-indigo transition-colors flex items-center gap-1.5 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-brand-indigo" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 text-slate-800 hover:text-brand-emerald transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-brand-indigo transition-colors font-medium"
            >
              LinkedIn ↗
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterModal;
