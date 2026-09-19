// src/components/CommandPalette.tsx — Raycast-Style Spotlight Command Palette (Light Theme)
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Zap, Download, Copy, Check, Terminal, ExternalLink, 
  Volume2, VolumeX, Bot, Layers, Code2, Cpu, Briefcase, Mail, X, ChevronRight 
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import sound from '../utils/sound';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Recruiter Actions' | 'External Profiles';
  icon: React.ElementType;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiter: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenRecruiter,
  isMuted,
  onToggleSound,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    onClose();
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    sound.playSuccess();
    setTimeout(() => {
      setCopiedText(null);
      onClose();
    }, 1200);
  };

  const candidateBrief = `Aravindselvan C — Software Developer (Core Systems, Full-Stack & Applied AI)
• Education: B.E. ECE (Sri Sairam Engineering College) | Class XII: 86.0%
• Highlights: $5,420 IEEE Project Grant Recipient (AirTon) | IMC Prosperity 4 Global Finalist | Google Diamond League (7,264 pts)
• Coding Rigor: 900+ Solved Challenges (LeetCode 212+, SkillRack 691 with 259 in pure C)
• Core Stack: Python, C, C++, DSA, ESP32 Telemetry, SDR, Next.js, React, TypeScript, Agentic AI Orchestration
• Availability: Immediate Fresher Joining (0-Day Notice)
• Contact: aravindselvan2006@gmail.com | +91 8668147238`;

  const commands: CommandItem[] = [
    // Recruiter Actions
    {
      id: 'recruiter-fast-track',
      title: 'Open 30-Second Recruiter Fast-Track HUD',
      category: 'Recruiter Actions',
      icon: Zap,
      shortcut: 'R',
      action: () => {
        onClose();
        onOpenRecruiter();
      },
    },
    {
      id: 'download-resume',
      title: 'Download Official Resume (PDF · 317 KB)',
      category: 'Recruiter Actions',
      icon: Download,
      action: () => {
        sound.playClick();
        window.open(personalInfo.resumeUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'copy-candidate-brief',
      title: 'Copy 1-Paragraph Candidate Brief (For Slack/Email)',
      category: 'Recruiter Actions',
      icon: Copy,
      action: () => copyToClipboard(candidateBrief, 'Candidate Brief'),
    },
    {
      id: 'copy-email',
      title: `Copy Email Address (${personalInfo.email})`,
      category: 'Recruiter Actions',
      icon: Mail,
      action: () => copyToClipboard(personalInfo.email, 'Email'),
    },
    {
      id: 'copy-phone',
      title: `Copy Phone Number (${personalInfo.phone})`,
      category: 'Recruiter Actions',
      icon: Mail,
      action: () => copyToClipboard(personalInfo.phone, 'Phone Number'),
    },

    // Navigation
    {
      id: 'nav-overview',
      title: 'Jump to: Hero & Executive Overview',
      category: 'Navigation',
      icon: Terminal,
      action: () => scrollTo('overview'),
    },
    {
      id: 'nav-evaluation',
      title: 'Jump to: AI Agent Technical Audit (8.9/10)',
      category: 'Navigation',
      icon: Bot,
      action: () => scrollTo('evaluation'),
    },
    {
      id: 'nav-projects',
      title: 'Jump to: Flagship Projects ($5,420 Grant / IMC Finalist)',
      category: 'Navigation',
      icon: Layers,
      action: () => scrollTo('projects'),
    },
    {
      id: 'nav-metrics',
      title: 'Jump to: 900+ Problem Solving Metrics & Code Runner',
      category: 'Navigation',
      icon: Code2,
      action: () => scrollTo('metrics'),
    },
    {
      id: 'nav-skills',
      title: 'Jump to: Verified Competency & Toolchain Matrix',
      category: 'Navigation',
      icon: Cpu,
      action: () => scrollTo('skills'),
    },
    {
      id: 'nav-experience',
      title: 'Jump to: CoE Space Tech SDR Internship & Education',
      category: 'Navigation',
      icon: Briefcase,
      action: () => scrollTo('experience'),
    },
    {
      id: 'nav-contact',
      title: 'Jump to: Direct Candidate Inquiry Portal',
      category: 'Navigation',
      icon: Mail,
      action: () => scrollTo('contact'),
    },

    // External Profiles
    {
      id: 'ext-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External Profiles',
      icon: ExternalLink,
      action: () => {
        window.open(personalInfo.linkedinUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'ext-github',
      title: 'Open GitHub Profile (@AravindS2006)',
      category: 'External Profiles',
      icon: ExternalLink,
      action: () => {
        window.open(personalInfo.githubUrl, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        sound.playBlip();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        sound.playBlip();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-brand-indigo flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 text-sm font-mono focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Feedback Alert for Copy */}
        {copiedText && (
          <div className="px-5 py-2.5 bg-emerald-50 border-b border-emerald-100 flex items-center gap-2 text-xs font-mono text-brand-emerald">
            <Check className="w-4 h-4" />
            <span>Copied {copiedText} to clipboard!</span>
          </div>
        )}

        {/* Commands List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-400">
              No matching commands found for "{query}".
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    sound.playClick();
                    cmd.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-indigo-50 text-brand-indigo' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white text-brand-indigo shadow-2xs' : 'bg-slate-100 text-slate-500'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-medium truncate">
                      {cmd.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase hidden sm:inline">
                      {cmd.category}
                    </span>
                    {cmd.shortcut && (
                      <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded text-slate-600">
                        {cmd.shortcut}
                      </kbd>
                    )}
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-indigo' : 'text-slate-300'}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <button
            onClick={onToggleSound}
            className="flex items-center gap-1.5 text-slate-500 hover:text-brand-indigo"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-indigo" />}
            <span>Sound {isMuted ? 'Off' : 'On'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
