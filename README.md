# Aravindselvan C — Engineering Portfolio

A public portfolio for an ECE undergraduate (Class of 2027), amateur radio operator VU37AE, and student project lead. Rebuilt as an evidence-led engineering journal with eight static pages, real laboratory photographs and two focused résumés.

## Run locally

Node.js 22 or newer. No application dependencies or secrets are required.

```sh
npm run dev
npm run check
npm run build
npm run preview
```

The local server uses http://127.0.0.1:4173. Set PORT to change it.

## Pages

- Homepage: selected work, project filters, personal journey, skills, learning, contact and résumé downloads.
- RF case study: 435 MHz antenna design, team fabrication/testing context and documented FieldFox measurements.
- AirTon: technical lead role, AI-assisted ML contribution and associated IEEE team funding with scope explained.
- Edumate: mobile-access problem, API investigation, AI-assisted build, reported traffic and Vercel-to-Render migration.
- Periyakottai Digital Seva: bilingual service assistance, request/grievance workflows and a directory-based assistant.
- Ghibli Art Generator: hosted model integration with accurate AI-code attribution.
- Learning archive: assessments, participation certificates, courses and learning modules with source links where available.
- Recruiter profile: readable online summary and print action.

## Deployment

Vercel uses `npm run build` and `dist/` through `vercel.json`. Static hosts can serve the generated directory. The build copies the full public `site/` tree, including case studies, photographs, sitemap and both PDFs. The deployed Sites portfolio is https://aravindselvan-workbench.aravindselvan2006.chatgpt.site/.

## Content accuracy

Internship: Advanced SDR for LEO Satellite Signal Acquisition and Ham Radio Signals, Centre of Excellence - Space Technology, Sri Sairam Engineering College, **16–30 June 2026**. These dates supersede earlier July references.

Personal dipole design is candidate-confirmed; fabrication, mounting changes and measured results are attributed to the internship team. The return-loss photograph records approximately 21.9 dB at 426.79 MHz, distinct from the 435 MHz design target.

Full-stack applications were implemented using AI coding agents; their dependencies do not establish personal framework proficiency. AirTon is a student research prototype, not a clinically validated device. The IEEE grant is team-project funding. ISRO records are participation, not employment or professional certifications. The paid ML programme is excluded.

Public images are cropped document views from the supplied internship report. Raw research files and certificates containing date of birth are not included. Contact is an email link and clipboard action, not a submission form. Google Fonts has system-font fallbacks.

## Maintenance

Update the website, résumé PDFs and profile page together. Keep course types and personal contributions accurate. No live platform statistics or hiring guarantees are displayed.

Edumate usage of about 1,000 requests/day is candidate-reported, not a unique-user count. Periyakottai features were inspected in public source; official adoption and service outcomes are not established. Its assistant uses directory matching, not an LLM.
