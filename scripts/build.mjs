import { mkdir, copyFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
await mkdir(new URL('dist/', root), { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'profile.html', 'profile.js', 'Aravindselvan_C_Resume.pdf']) {
  await copyFile(new URL(`site/${file}`, root), new URL(`dist/${file}`, root));
}
console.log('Built portfolio and current resume in dist/. No dependencies or secrets required.');
