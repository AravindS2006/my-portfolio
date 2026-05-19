import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, MessageSquare, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const onlineProfiles = [
  { name: 'LeetCode', url: 'https://leetcode.com/Aravindselvan', color: 'text-yellow-400', bg: 'hover:bg-yellow-400/10' },
  { name: 'HackerRank', url: 'https://hackerrank.com/aravindselvan201', color: 'text-green-400', bg: 'hover:bg-green-400/10' },
  { name: 'SkillRack', url: 'https://www.skillrack.com/faces/resume.xhtml?id=441693&key=c2110db4f08939a1bfc90e35bf38dec1b85f0453', color: 'text-blue-400', bg: 'hover:bg-blue-400/10' },
  { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/users/aravindselvanc-2555', color: 'text-neon-blue', bg: 'hover:bg-neon-blue/10' },
  { name: 'GeeksForGeeks', url: 'https://geeksforgeeks.org/user/aravindselvan2006', color: 'text-green-500', bg: 'hover:bg-green-500/10' },
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const env = import.meta.env as Record<string, string | undefined>;
    const serviceId =
      env.VITE_EMAILJS_SERVICE_ID ||
      env.EMAILJS_SERVICE_ID ||
      process.env.VITE_EMAILJS_SERVICE_ID ||
      process.env.EMAILJS_SERVICE_ID ||
      '';
    const templateId =
      env.VITE_EMAILJS_TEMPLATE_ID ||
      env.EMAILJS_TEMPLATE_ID ||
      process.env.VITE_EMAILJS_TEMPLATE_ID ||
      process.env.EMAILJS_TEMPLATE_ID ||
      'template_oztcb36';
    const publicKey =
      env.VITE_EMAILJS_PUBLIC_KEY ||
      env.EMAILJS_PUBLIC_KEY ||
      process.env.VITE_EMAILJS_PUBLIC_KEY ||
      process.env.EMAILJS_PUBLIC_KEY ||
      'NIJzrybBeRV4_FTXD';

    if (!serviceId.trim()) {
      setSubmitError('Email service is not configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId.trim(),
        templateId.trim(),
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          reply_to: formState.email
        },
        { publicKey: publicKey.trim() }
      );

      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-neon-blue font-mono text-sm tracking-widest mb-3">07. CONTACT</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="relative">
             <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
             <p className="text-slate-400 text-lg leading-relaxed">
               I'm actively seeking new opportunities to collaborate on AI and ML projects. 
               Whether you're interested in Generative AI, RAG pipelines, or just want to geek out over the latest papers, I'd love to hear from you.
             </p>
             {/* Decorative element */}
             <div className="absolute -top-10 -left-10 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          <div className="space-y-4 pt-6">
            <a 
              href="mailto:aravindselvan2006@gmail.com" 
              className="group flex items-center gap-4 text-slate-300 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-neon-blue/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-dark-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Mail className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block uppercase tracking-wider">Email</span>
                <span className="font-mono text-white group-hover:text-neon-blue transition-colors">aravindselvan2006@gmail.com</span>
              </div>
            </a>
            
            <a 
              href="tel:+918668147238" 
              className="group flex items-center gap-4 text-slate-300 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-neon-blue/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-dark-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Phone className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block uppercase tracking-wider">Phone</span>
                <span className="font-mono text-white group-hover:text-neon-blue transition-colors">+91 86681 47238</span>
              </div>
            </a>

            <div className="flex items-center gap-4 text-slate-300 p-4 bg-white/5 rounded-2xl border border-white/5">
               <div className="w-12 h-12 rounded-full bg-dark-bg flex items-center justify-center">
                 <MapPin className="w-5 h-5 text-neon-blue" />
              </div>
               <div>
                <span className="text-xs text-slate-500 block uppercase tracking-wider">Location</span>
                <span className="font-mono text-white">Chennai, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form with Floating Effect */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative"
        >
           {/* Background Glow */}
           <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple blur-2xl opacity-20 transform rotate-6 rounded-3xl"></div>
           
           <div className="bg-card-bg p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-neon-purple w-6 h-6" />
                <h4 className="text-xl font-bold text-white">Send a Message</h4>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="name" className={`text-xs font-medium transition-colors ${activeField === 'name' ? 'text-neon-blue' : 'text-slate-400'}`}>Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formState.name}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className={`text-xs font-medium transition-colors ${activeField === 'email' ? 'text-neon-blue' : 'text-slate-400'}`}>Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formState.email}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all placeholder:text-slate-600"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className={`text-xs font-medium transition-colors ${activeField === 'message' ? 'text-neon-blue' : 'text-slate-400'}`}>Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    value={formState.message}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all resize-none placeholder:text-slate-600"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] ${
                    submitted 
                      ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
                      : 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {submitError && (
                  <p className="text-red-400 text-sm">{submitError}</p>
                )}
              </form>
           </div>
        </motion.div>
      </div>

      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2 }}
         className="mt-24 pt-8 border-t border-white/10 flex justify-center gap-8"
      >
          <a href="https://linkedin.com/in/aravindselvan-c" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <span className="p-2 bg-white/5 rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </span>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/AravindS2006" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
             <span className="p-2 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
              <Github className="w-5 h-5" />
            </span>
            <span className="font-medium">GitHub</span>
          </a>
      </motion.div>

      {/* Competitive Programming & Online Profiles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 pt-8 border-t border-white/5"
      >
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Code2 className="text-neon-blue w-5 h-5" />
          <h4 className="text-lg font-bold text-white">Competitive Programming & Online Profiles</h4>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {onlineProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 ${profile.color} ${profile.bg} hover:border-current transition-all font-mono text-sm font-medium`}
            >
              {profile.name}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
