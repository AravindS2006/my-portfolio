# Aravindselvan C — Portfolio

A responsive static portfolio for an ECE undergraduate interested in programming, agent-built applications and amateur radio. Built with HTML, CSS and vanilla JavaScript; no application dependencies, API keys or backend required.

## Run locally

Use Node.js 22 or newer:

```sh
npm run dev
```

Open http://127.0.0.1:4173. There are no dependencies to install. Set `PORT` if that port is already in use.

```sh
npm run check
npm run build
npm run preview
```

## Structure

- `site/index.html`: homepage, selected projects, education, radio, learning and contact.
- `site/app.js`: interactive theme selector, project case studies and email copy.
- `site/styles.css`: responsive styling and reduced-motion support.
- `site/profile.html`: concise recruiter brief with print / save as PDF.
- `site/profile.js`: print action.
- `scripts/`: dependency-free build and local preview utilities.
- `dist/`: generated static output; excluded from Git.

## Deploy

For Vercel, import this repository. `vercel.json` selects the static build, runs `npm run build` and serves `dist`. If the existing Vercel project has an old Vite configuration, use this repository root and the checked-in configuration. Any connected Git deployment can run when its configured branch is pushed or merged.

Other static hosts can serve `dist/` after `npm run build`. The relative asset links also support a repository subpath. No SPA rewrites are needed. This repository does not enable GitHub Pages automatically.

## Content accuracy

- Three selected projects: Edumate, Ghibli Art Generator and the AirTon student prototype.
- Full-stack applications are explicitly attributed to agentic coding tools. Their technologies are not presented as personal framework proficiency.
- ML-related subjects and Java are introductory exposure only.
- SDR / HAM internship: 15–30 July 2026, CoE in Space Technology, Sri Sairam Engineering College.
- HAM radio call sign: VU37AE, supplied by the candidate.
- The paid ML programme is excluded. No unsupported hiring scores or percentile rankings.
- Funding is described as team-project funding; the ocular project is a research prototype.
- Credentials link to their evidence. Learning badges are not labelled professional certifications.

Update both the homepage and recruiter brief when facts change. The portfolio implementation itself was created with an AI coding agent and should not be treated as evidence of independent frontend expertise.

The original résumé, private research, master JSON brief, credentials and Sites configuration are intentionally excluded. Contact uses a mail link and clipboard; it does not pretend to submit a form. Fonts load from Google Fonts with local fallbacks. Project applications themselves were not runtime-verified as part of this portfolio.
