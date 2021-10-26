import { readFile } from 'fs/promises';
process.on('uncaughtException', (e) => {
  console.log(e);
});

const res = await readFile(new URL('app.mj', import.meta.url), 'utf-8');

console.log('hello');
