import { mkdir, cp } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
await mkdir(new URL('dist/', root), { recursive: true });
await cp(new URL('site/', root), new URL('dist/', root), { recursive: true });
console.log('Built all portfolio pages, evidence assets and resumes in dist/.');
