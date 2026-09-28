const signals = {
  software: { label: '01 / SOFTWARE', description: 'From a student workflow to a useful interface.', link: 'Explore Edumate', target: '#edumate' },
  ai: { label: '02 / APPLIED AI', description: 'An interface between imagination and hosted models.', link: 'Explore Ghibli Art Generator', target: '#ghibli' },
  hardware: { label: '03 / HARDWARE', description: 'Exploring what happens when code meets sensors.', link: 'Explore AirTon', target: '#airton' }
};
document.querySelectorAll('[data-signal]').forEach(button => button.addEventListener('click', () => {
  const selected = signals[button.dataset.signal];
  document.querySelectorAll('[data-signal]').forEach(node => { const active = node === button; node.classList.toggle('active', active); node.setAttribute('aria-pressed', String(active)); });
  document.getElementById('signal-label').textContent = selected.label;
  document.getElementById('signal-description').textContent = selected.description;
  const link = document.getElementById('signal-link'); link.textContent = selected.link + ' ↗'; link.href = selected.target;
}));
const studies = {
  edumate: {
    label: '01 / FULL-STACK APPLICATION', title: 'Edumate', intro: 'Making everyday student information easier to reach.',
    problem: 'Attendance, schedules and academic information are part of a student’s everyday workflow. This project explores a more convenient, mobile-first way to bring them together.',
    approach: 'A Next.js and React interface connects to a Python FastAPI layer. The repository includes views for attendance, timetables, academic information and related portal workflows.',
    contribution: 'The full-stack application was built end-to-end using agentic coding tools such as Claude and Google Antigravity. I used the tools to create the application; I do not claim independent proficiency in its frontend frameworks or authorship of all the implementation code.',
    stack: ['TypeScript · React · Next.js','Python · FastAPI · HTTPX','Tailwind CSS · Vercel / Render'],
    limits: 'A personal student project, not an official institutional product. Authenticated workflows, user adoption and performance benchmarks are not independently verified. A repository demonstrates the implementation; it does not establish production reliability.',
    next: 'A useful next step: measure real mobile performance and document a reproducible demo using sample data.',
    links: [{label:'Explore the repository',url:'https://github.com/AravindS2006/edumate'}]
  },
  ghibli: {
    label: '02 / HOSTED AI INTEGRATION', title: 'Ghibli Art Generator', intro: 'Turning a creative prompt into a model-powered interaction.',
    problem: 'Image-generation models are more approachable when their inputs, results and errors have a clear interface. This project explores that experience through stylized artwork.',
    approach: 'A Next.js API route calls Hugging Face’s hosted FLUX.1-schnell model. An optional reference-image flow uses Gemma 3 for image description, with fallback handling when that step is unavailable.',
    contribution: 'An application built using agentic coding tools. The implementation code was produced by the agents, and the image-generation models are third-party work. This is an example of using AI tools to create an application, not evidence that I independently write its full-stack code or train its models.',
    stack: ['Next.js · React · TypeScript','Hugging Face Inference API','FLUX.1-schnell · Gemma 3'],
    limits: 'This is API integration, not a claim of training or fine-tuning the model. Reference-image support is experimental, and hosted inference depends on provider availability and credits. No affiliation with Studio Ghibli is implied.',
    next: 'A useful next step: publish a small reproducible evaluation of generation failures, latency and reference-image behavior.',
    links: [{label:'Explore the repository',url:'https://github.com/AravindS2006/ghibli-art-generator'},{label:'Read the generation route',url:'https://github.com/AravindS2006/ghibli-art-generator/blob/main/src/app/api/generate-ghibli/route.ts'}]
  },
  airton: {
    label: '03 / STUDENT RESEARCH PROTOTYPE', title: 'AirTon', intro: 'Exploring portable ocular screening at the intersection of hardware and AI.',
    problem: 'The student team is exploring more accessible ocular screening. AirTon is a prototype and research effort, with work spanning sensors, microcontrollers and image analysis.',
    approach: 'The résumé describes an ESP32-based handheld prototype, Python processing and exploration of fundus-image machine learning. The associated funded project is listed by EPICS in IEEE under its formal Retino-Oculometric title.',
    contribution: 'Technical lead of the student project. I worked on the machine-learning component using AI tools. This describes my role and contribution; it does not imply independent model development or a validated medical result.',
    stack: ['ESP32 · IoT sensors','Python · C','Hardware prototyping · Applied AI'],
    limits: 'Not a clinically validated or approved diagnostic device. The $5,420 is team-project funding, not an individual prize. IEEE’s funded project has a formal title and March 2026 launch; its exact version relationship to the AirTon prototype is still being documented.',
    next: 'A useful next step: document individual contributions, prototype test methods and the relationship between the project versions.',
    links: [{label:'Official IEEE project record',url:'https://epics.ieee.org/project/retino-oculometric-dual-layer-system-for-rapid-ocular-health-triage/'},{label:'Associated project web app source',url:'https://github.com/AravindS2006/airton-web-final'}]
  }
};
const dialog = document.getElementById('project-dialog');
let previousFocus;
function element(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text) node.textContent = text; return node; }
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = studies[button.dataset.project]; previousFocus = button;
  const content = document.getElementById('dialog-content'); content.replaceChildren(); content.className = 'dialog-content';
  content.append(element('p','eyebrow',project.label)); const title = element('h2','',project.title); title.id = 'dialog-title'; content.append(title,element('p','dialog-intro',project.intro));
  const body = element('div','dialog-body');
  [['THE PROBLEM',project.problem],['THE APPROACH',project.approach],['MY CONTRIBUTION',project.contribution]].forEach(([title,text]) => {const section=element('section'); section.append(element('h3','',title),element('p','',text)); body.append(section);});
  const stack=element('section'); stack.append(element('h3','','PROJECT TECHNOLOGIES')); const list=element('ul'); project.stack.forEach(item=>list.append(element('li','',item))); stack.append(list); body.append(stack); content.append(body);
  const limits=element('div','dialog-limits'); limits.append(element('h3','','Current scope'),element('p','',project.limits)); content.append(limits);
  const next=element('p','contribution',project.next); next.style.marginTop='20px'; content.append(next);
  const links=element('div','dialog-links'); project.links.forEach(item=>{const a=element('a','',item.label+' ↗'); a.href=item.url; a.target='_blank'; a.rel='noopener noreferrer'; links.append(a);}); content.append(links);
  dialog.showModal(); document.body.classList.add('dialog-open'); dialog.scrollTop=0;
}));
function closeDialog(){dialog.close();}
document.getElementById('close-dialog').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');previousFocus?.focus({preventScroll:true});});
document.getElementById('copy-email').addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try{await navigator.clipboard.writeText('aravindselvan2006@gmail.com');status.textContent='Email copied.';}catch{status.textContent='Select the email address above to copy it, or use Say hello.';}
});
