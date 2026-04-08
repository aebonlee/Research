import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const svgContent = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E3A8A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)" />
  <text x="256" y="340" font-family="Arial, sans-serif" font-size="320" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="-15">R</text>
</svg>`;

async function generate() {
  const svgBuffer = Buffer.from(svgContent);

  // SVG favicon
  const svgPath = join(__dirname, '..', 'public', 'favicon.svg');
  await sharp(svgBuffer).toFile(svgPath);
  console.log(`SVG favicon: ${svgPath}`);

  // PNG 192x192
  const png192 = join(__dirname, '..', 'public', 'favicon-192.png');
  await sharp(svgBuffer).resize(192, 192).png().toFile(png192);
  console.log(`PNG 192: ${png192}`);

  // PNG 512x512
  const png512 = join(__dirname, '..', 'public', 'favicon-512.png');
  await sharp(svgBuffer).resize(512, 512).png().toFile(png512);
  console.log(`PNG 512: ${png512}`);

  // ICO-like 32x32 PNG (browsers accept .png as favicon)
  const png32 = join(__dirname, '..', 'public', 'favicon-32.png');
  await sharp(svgBuffer).resize(32, 32).png().toFile(png32);
  console.log(`PNG 32: ${png32}`);

  // Apple touch icon 180x180
  const apple = join(__dirname, '..', 'public', 'apple-touch-icon.png');
  await sharp(svgBuffer).resize(180, 180).png().toFile(apple);
  console.log(`Apple touch icon: ${apple}`);

  console.log('All favicons generated!');
}

generate().catch(console.error);
