import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, FileText } from 'lucide-react';

const education = [
  {
    title: 'B.E. – Electronics & Communications Engineering',
    institution: 'Sri Sairam Engineering College, Chennai',
    period: 'Sep 2023 – May 2027',
    score: 'CGPA: 6.95 / 10.0',
  },
  {
    title: 'Class 12 – Computer Mathematics',
    institution: 'Akshaya Academy Matric Hr. Sec. School, Dindigul',
    period: 'June 2022 – May 2023',
    score: 'Score: 86% / 100%',
  },
];

const projectHighlights = [
  {
    name: 'Airton — Handheld Medical AI Device',
    stack: 'Python · ESP32 · IoT',
    period: '2024 – 2027',
    points: [
      'Built an ML-powered hardware prototype for non-invasive glaucoma screening and secured IEEE funding of $5,420.',
      'Integrated real-time sensor pipelines with ESP32 firmware for live biometric capture and on-device classification.',
    ],
  },
  {
    name: 'Ghibli Art Generator — Stylized Latent Diffusion Pipeline',
    stack: 'Python · Hugging Face Diffusers · Gradio',
    period: '2025',
    points: ['Developed text-to-image and image-to-image pipeline with LoRA fine-tuning for high-fidelity style transfer.'],
  },
  {
    name: 'Edumate — Smart Student Dashboard',
    stack: 'React.js · Node.js · FastAPI · Python · Vercel · Render',
    period: '2026',
    points: [
      'Designed and deployed a mobile-optimized dashboard with real-time attendance and data visualization.',
      'Achieved sub-2 second load times on production deployment.',
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10 md:py-14">
        <header className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Software Engineer</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Aravindselvan C</h1>
          <p className="mt-5 max-w-3xl text-slate-600">
            Final-year B.E. ECE student at Sri Sairam Engineering College with hands-on expertise in python programming. Finalist in IMC Prosperity 4 and recipient of IEEE funding for a
            medical AI prototype.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <a className="inline-flex items-center gap-2 hover:text-slate-900" href="mailto:aravindselvan2006@gmail.com">
              <Mail className="h-4 w-4" /> aravindselvan2006@gmail.com
            </a>
            <a className="inline-flex items-center gap-2 hover:text-slate-900" href="tel:+918668147238">
              <Phone className="h-4 w-4" /> +91 8668147238
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Chennai, Tamil Nadu, India
            </p>
            <a className="inline-flex items-center gap-2 hover:text-slate-900" href="https://aravindselvan.vercel.app" target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" /> aravindselvan.vercel.app
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/aravindselvan-c"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/AravindS2006"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="/assets/Aravindselvan_C_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
          </div>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-semibold">Education</h2>
            <div className="mt-4 space-y-5">
              {education.map((item) => (
                <article key={item.title}>
                  <h3 className="font-medium text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.period} · {item.score}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-semibold">Technical Skills</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li><span className="font-medium text-slate-900">Languages:</span> Python, C</li>
              <li><span className="font-medium text-slate-900">Cloud & DevOps:</span> Google Cloud Platform, Vercel, Render.com</li>
              <li><span className="font-medium text-slate-900">Hardware & IoT:</span> Arduino, ESP32, SDR</li>
              <li><span className="font-medium text-slate-900">Tools:</span> Claude Code, VS Code, Jupyter Notebook, Cursor AI, GitHub Copilot, GitHub, Linux</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-semibold">Internship Experience</h2>
          <article className="mt-4">
            <h3 className="font-medium text-slate-900">Advanced SDR for LEO Satellite Signal Acquisition and Ham Radio</h3>
            <p className="text-sm text-slate-600">Coe - Space Technology, Sairam · Nov – Dec 2023</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Developed practical expertise in SDR, LEO satellite communication, antenna systems, and amateur radio through theory and lab sessions.</li>
              <li>Designed, fabricated, and tested a 435 MHz half-wave dipole antenna for amateur satellite communication.</li>
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-semibold">Projects</h2>
          <div className="mt-4 space-y-6">
            {projectHighlights.map((project) => (
              <article key={project.name}>
                <h3 className="font-medium text-slate-900">{project.name}</h3>
                <p className="text-sm text-slate-600">{project.stack} · {project.period}</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-semibold">Achievements & Competitions</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>IMC Prosperity 4 — Finalist, Global Algorithmic Trading Competition</li>
              <li>Airton Medical Device — Awarded $5,420 IEEE funding for AI-based glaucoma detection prototype</li>
              <li>MSME Hackathon 2024 — Top 50 teams nationally</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-semibold">Certifications</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Google Cloud / Coursera — Introduction to Generative AI</li>
              <li>NPTEL — Machine Learning and Deep Learning Fundamentals; Computer Networks and Internet Protocol</li>
              <li>HackerRank — Software Engineer Certificate; Python Basic & Problem Solving Basic</li>
              <li>LinkedIn Learning — Advanced Prompt Engineering Techniques</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-semibold">Competitive Programming & Profiles</h2>
          <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <a className="hover:text-slate-900" href="https://leetcode.com/Aravindselvan" target="_blank" rel="noreferrer">LeetCode</a>
            <a className="hover:text-slate-900" href="https://hackerrank.com/aravindselvan201" target="_blank" rel="noreferrer">HackerRank</a>
            <a className="hover:text-slate-900" href="https://skillrack.com/profile/441693" target="_blank" rel="noreferrer">SkillRack</a>
            <a className="hover:text-slate-900" href="https://learn.microsoft.com/users/aravindselvanc-2555" target="_blank" rel="noreferrer">Microsoft Learn</a>
            <a className="hover:text-slate-900" href="https://geeksforgeeks.org/user/aravindselvan2006" target="_blank" rel="noreferrer">GeeksforGeeks</a>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Aravindselvan C
        </footer>
      </main>
    </div>
  );
};

export default App;
