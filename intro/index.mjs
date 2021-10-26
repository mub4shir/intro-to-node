import { readFile, writeFile } from 'fs/promises';

let template = await readFile(
  new URL('template.html', import.meta.url),
  'utf-8'
);

const data = {
  title: 'Node.js',
  body: 'This is the final HTML',
};

const temp = Object.entries(data);
//console.log(temp);

for (const [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}

await writeFile(new URL('index.html', import.meta.url), template);

//console.log(template);
