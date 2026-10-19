// Builds the web-ready brand + people images from the originals in public/.
//   npm run assets
// - public/brand/*      logos (transparent, light + dark), favicon, social preview, client logos
// - public/images/people/*   small round-friendly testimonial photos
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';

const brand = 'public/brand';
const people = 'public/images/people';
await Promise.all([mkdir(brand, { recursive: true }), mkdir(people, { recursive: true })]);

// ---------- logos ----------
// Turn "ink on a plain background" into "ink on transparent", in the colour we choose.
async function inkToTransparent(file, rgb, { gain = 1 } = {}) {
  const { data, info } = await sharp(file).flatten({ background: '#ffffff' }).greyscale().negate().linear(gain, 0).raw().toBuffer({ resolveWithObject: true });
  return sharp({ create: { width: info.width, height: info.height, channels: 3, background: rgb } })
    .joinChannel(data, { raw: { width: info.width, height: info.height, channels: 1 } })
    .png();
}
const save = async (img, out) => { const i = await img.toFile(out); console.log(out, `${i.width}x${i.height}`, `${(i.size / 1024).toFixed(0)}KB`); };

// light-mode logo: black ink -> transparent
const lightFull = await (await inkToTransparent('public/logo/mon logo light mode.png', { r: 24, g: 25, b: 29 })).toBuffer();
// dark-mode logo: already white ink on transparent
const darkFull = await sharp('public/logo/mon logo dark mode.png').ensureAlpha().png().toBuffer();

for (const [name, buf] of [['light', lightFull], ['dark', darkFull]]) {
  // full lockup (monogram + name + tagline)
  await save(sharp(buf).trim({ threshold: 8 }).resize({ width: 900, withoutEnlargement: true }).png(), `${brand}/logo-${name}.png`);
  // monogram only (the NB), cropped above the name text
  const region = await sharp(buf).extract({ left: 320, top: 230, width: 640, height: 500 }).png().toBuffer(); // sharp trims before extracting, so do it in two steps
  const mono = await sharp(region).trim({ threshold: 8 }).png().toBuffer();
  await save(sharp(mono).resize({ height: 240, withoutEnlargement: true }).png(), `${brand}/mark-${name}.png`);
}

// favicon / touch icon / social preview from the glowing "url logo"
const urlLogo = 'public/logo/url logo.png';
const sq = () => sharp(urlLogo).flatten({ background: '#050506' }).extract({ left: 325, top: 70, width: 940, height: 940 });
await save(sq().resize(256, 256).png(), 'public/favicon.png');
await save(sq().resize(180, 180).png(), 'public/apple-touch-icon.png');
await save(sharp(urlLogo).flatten({ background: '#050506' }).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 84 }), 'public/og.jpg');

// client / partner logos for the sliding strip: crop the empty margins, keep transparency
async function cropToArt(input, height) {
  const png = await sharp(input).ensureAlpha().png().toBuffer();
  const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
  let x0 = info.width, y0 = info.height, x1 = 0, y1 = 0;
  for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
    if (data[(y * info.width + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  const crop = await sharp(png).extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 }).png().toBuffer();
  return sharp(crop).resize({ height, withoutEnlargement: true }).png();
}
await mkdir(`${brand}/clients`, { recursive: true });
// Magis is navy on white -> white silhouette so it shows on the dark strip
const magisWhite = await (await inkToTransparent('public/logo/magis-digital-solutions-logo 1 1(1).png', { r: 255, g: 255, b: 255 }, { gain: 2.4 })).toBuffer();
await save(await cropToArt(magisWhite, 140), `${brand}/clients/magis.png`);
await save(await cropToArt('public/logo/logo ihela ryanje white 1.png', 72), `${brand}/clients/ihela.png`);
await save(await cropToArt('public/logo/the haven logos.png', 160), `${brand}/clients/haven.png`);
await save(await cropToArt('public/logo/Harvest_logo.png', 160), `${brand}/clients/harvest.png`);
await save(await cropToArt('public/logo/partener logo.png', 140), `${brand}/clients/partner.png`);

// Harvest has no screenshot (its site is offline), so its project image is the logo on a white card
await mkdir('public/images/projects', { recursive: true });
const harvestLogo = await (await cropToArt('public/logo/Harvest_logo.png', 520)).toBuffer();
const hi = await sharp({ create: { width: 1000, height: 700, channels: 3, background: '#ffffff' } })
  .composite([{ input: harvestLogo, gravity: 'center' }])
  .webp({ quality: 90 })
  .toFile('public/images/projects/harvest.webp');
console.log('projects/harvest.webp', `${hi.width}x${hi.height}`);

// ---------- testimonial photos ----------
const faces = { babie: 'Babie', bakame: 'Bakame', darcy: 'Darcy', samandari: 'Samandari', vazquez: 'Vazquez Rugwe', aza: 'βȺɀȺ•ƓටᎠ' };
for (const [slug, file] of Object.entries(faces)) {
  const info = await sharp(`public/testimonial images/${file}.jpeg`).rotate().resize(200, 200, { fit: 'cover', position: 'attention' }).webp({ quality: 82 }).toFile(`${people}/${slug}.webp`);
  console.log(`people/${slug}.webp`, `${(info.size / 1024).toFixed(0)}KB`);
}
