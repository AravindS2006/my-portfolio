// src/components/ContactPortal.tsx — Friction-Free Recruiter Contact Portal (Light Theme)
import React, { useState } from 'react';
import { 
  Mail, Phone, Download, Send, CheckCircle2, Copy, Check, 
  MapPin, Clock, Briefcase, ExternalLink, MessageSquare, Sparkles, Terminal 
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import sound from '../utils/sound';

export const ContactPortal: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    sound.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    sound.playSuccess();
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sound.playClick();

    const subject = encodeURIComponent(`Job Opportunity / Inquiry from ${name} (${company || 'Company'})`);
    const body = encodeURIComponent(
      `Hello Aravindselvan,\n\nName: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sound.playSuccess();
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-brand-emerald text-xs font-mono font-medium mb-3.5 shadow-2xs">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>DIRECT CANDIDATE INQUIRIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Initiate Direct Contact
        </h2>
        <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
          Actively interviewing for full-time fresher roles in Software Engineering, Core Systems, and Applied AI.
          Available for <strong className="text-brand-emerald font-semibold">immediate onboarding</strong> with zero notice period.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* LEFT COLUMN: Candidate Quick Facts & Direct Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Availability Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-emerald-200 shadow-card relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-mono font-bold text-brand-emerald tracking-wider">
                IMMEDIATE AVAILABILITY
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Ready for Day-1 Impact
            </h3>

            <div className="mt-4 space-y-2.5 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>Notice Period: <strong className="text-slate-900 font-bold">0 Days (Immediate)</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Location: <strong className="text-slate-900">Chennai · Open to Relocate / Remote</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-brand-indigo flex-shrink-0" />
                <span>Target Roles: <strong className="text-slate-900">Software Developer / Applied AI</strong></span>
              </div>
            </div>

            {/* Resume Download */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-indigo hover:bg-indigo-700 text-white font-bold text-xs font-mono transition-all shadow-md shadow-indigo-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Verified Resume (PDF · 317 KB)</span>
              </a>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Direct Communication Lines
            </h4>

            {/* Email */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-indigo-50 text-brand-indigo flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-slate-400">Primary Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs font-mono text-slate-900 hover:text-brand-indigo font-medium truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-emerald-50 text-brand-emerald flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-slate-400">Direct Phone / WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs font-mono text-slate-900 hover:text-brand-emerald font-medium truncate block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Profiles */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip()}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-xs font-mono text-slate-700 hover:text-brand-indigo transition-all font-medium"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-brand-indigo" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip()}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 transition-all font-medium"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Recruiter Dispatch Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-brand-indigo" />
                  Dispatch Opportunity / Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Transmits directly to Aravind's inbox with prefilled candidate headers.
                </p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-semibold">
                Direct Route
              </span>
            </div>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-indigo-50 border border-indigo-200 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-brand-indigo mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-900">Inquiry Ready for Transmission</h4>
                <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Your mail client has been opened with your inquiry prefilled. You can also reach Aravind directly at{' '}
                  <strong className="text-brand-indigo">{personalInfo.email}</strong> or call{' '}
                  <strong className="text-brand-emerald">{personalInfo.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 transition-colors font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Google, DeepMind, Stripe, Stealth Startup"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                    Opportunity / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share role details, engineering stack, timeline, or meeting invite..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-brand-indigo text-white font-bold text-xs sm:text-sm font-mono transition-all shadow-sm hover:shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Routing Transmission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Opportunity to Aravindselvan</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPortal;
