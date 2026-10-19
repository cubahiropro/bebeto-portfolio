// Makes web-sized copies of the project images in public/images and public/images/project images
// -> public/images/projects/<name>.webp  (originals are left untouched; name = file name, lower-case, dashes).
// Run:  npm run images
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';

const sources = ['public/images', 'public/images/project images'];
const out = 'public/images/projects';
const skip = /^(portrait|work)-/;

await mkdir(out, { recursive: true });
for (const src of sources) {
  for (const file of await readdir(src, { withFileTypes: true })) {
    if (!file.isFile() || !/\.(png|jpe?g)$/i.test(file.name) || skip.test(file.name)) continue;
    const name = parse(file.name).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const info = await sharp(join(src, file.name))
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(join(out, `${name}.webp`));
    console.log(`${file.name} -> projects/${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  }
}
