import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, MessageSquare, Copy, Check, Download, ExternalLink, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const metaEnv = ((import.meta as unknown as { env?: Record<string, string | undefined> }).env) || {};
    const procEnv = (typeof process !== 'undefined' ? (process.env as Record<string, string | undefined>) : {}) || {};
    const serviceId =
      metaEnv.VITE_EMAILJS_SERVICE_ID ||
      metaEnv.EMAILJS_SERVICE_ID ||
      procEnv.VITE_EMAILJS_SERVICE_ID ||
      procEnv.EMAILJS_SERVICE_ID ||
      '';
    const templateId =
      metaEnv.VITE_EMAILJS_TEMPLATE_ID ||
      metaEnv.EMAILJS_TEMPLATE_ID ||
      procEnv.VITE_EMAILJS_TEMPLATE_ID ||
      procEnv.EMAILJS_TEMPLATE_ID ||
      'template_oztcb36';
    const publicKey =
      metaEnv.VITE_EMAILJS_PUBLIC_KEY ||
      metaEnv.EMAILJS_PUBLIC_KEY ||
      procEnv.VITE_EMAILJS_PUBLIC_KEY ||
      procEnv.EMAILJS_PUBLIC_KEY ||
      'NIJzrybBeRV4_FTXD';

    if (serviceId.trim()) {
      try {
        await emailjs.send(
          serviceId.trim(),
          templateId.trim(),
          {
            from_name: formState.name,
            from_email: formState.email,
            subject: formState.subject || 'Portfolio Inquiry',
            message: formState.message,
            reply_to: formState.email,
          },
          { publicKey: publicKey.trim() }
        );

        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
        return;
      } catch (error) {
        console.warn('EmailJS service failed, falling back to mailto', error);
      }
    }

    // Graceful fallback to mailto
    setIsSubmitting(false);
    const subject = encodeURIComponent(formState.subject || `Opportunity Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Aravindselvan,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#050711]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-neon-cyan font-mono text-xs tracking-widest uppercase mb-2">
            07. Direct Connection & Recruitment
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 mx-auto rounded-full mb-5" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Actively seeking full-time fresher software developer and applied AI roles.
            Open to immediate joining with relocation flexibility across major tech hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xl font-bold text-white mb-4">Direct Contact Channels</h3>

            {/* Email Card with Copy */}
            <SpotlightCard
              spotlightColor="rgba(0, 245, 255, 0.16)"
              className="p-4 flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-neon-cyan shadow-inner-glow">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-neon-cyan transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Phone Card with Copy */}
            <SpotlightCard
              spotlightColor="rgba(168, 85, 247, 0.16)"
              className="p-4 flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-inner-glow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-neon-cyan transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Location Card */}
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.16)"
              className="p-4 flex items-center gap-3.5"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner-glow">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location & Availability</div>
                <div className="text-xs sm:text-sm font-mono text-white">
                  {personalInfo.location} · <span className="text-emerald-400 font-semibold">Open to Relocation</span>
                </div>
              </div>
            </SpotlightCard>

            {/* Social / Resume Action Panel */}
            <div className="p-5 rounded-2xl bg-[#0a0e24]/80 border border-white/10 space-y-3 pt-4 backdrop-blur-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Quick Professional Profiles
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/50 text-xs font-medium text-white transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-medium text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neon-cyan text-dark-bg font-extrabold text-xs transition-all shadow-glow-cyan hover:bg-white"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Resume (PDF · 317 KB)</span>
              </a>
            </div>
          </div>

          {/* Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0a0e24]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-neon-cyan border border-cyan-500/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Technical Recruiter / Hiring Lead"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Subject / Role Focus</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Software Developer / Applied AI Role"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about the role, team, or challenge you're solving..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 transition-all resize-none placeholder:text-slate-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  submitted
                    ? 'bg-emerald-500 text-white shadow-glow-green'
                    : 'bg-neon-cyan text-dark-bg hover:bg-white shadow-glow-cyan hover:scale-[1.01]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Message Received / Mail Draft Opened!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Recruiter Message</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                Direct inquiries are monitored daily at {personalInfo.email}.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

