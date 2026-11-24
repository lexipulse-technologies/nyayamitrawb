import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceLogo = path.join(__dirname, '..', 'public', 'brand', 'lexipulse_logo.jpeg');
const outputDir = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');

const densities = [
  { name: 'mdpi', size: 108, safeSize: 72 },
  { name: 'hdpi', size: 162, safeSize: 108 },
  { name: 'xhdpi', size: 216, safeSize: 144 },
  { name: 'xxhdpi', size: 324, safeSize: 216 },
  { name: 'xxxhdpi', size: 432, safeSize: 288 },
];

const legacySizes = [
  { name: 'mdpi', size: 48 },
  { name: 'hdpi', size: 72 },
  { name: 'xhdpi', size: 96 },
  { name: 'xxhdpi', size: 144 },
  { name: 'xxxhdpi', size: 192 },
];

async function generateForegrounds() {
  const logoBuffer = fs.readFileSync(sourceLogo);
  const metadata = await sharp(logoBuffer).metadata();
  console.log(`Source logo: ${metadata.width}x${metadata.height}`);

  for (const density of densities) {
    const outputPath = path.join(outputDir, `mipmap-${density.name}`, 'ic_launcher_foreground.png');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    
    await sharp(logoBuffer)
      .resize(density.safeSize, density.safeSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .extend({
        top: (density.size - density.safeSize) / 2,
        bottom: (density.size - density.safeSize) / 2,
        left: (density.size - density.safeSize) / 2,
        right: (density.size - density.safeSize) / 2,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    
    console.log(`Generated: mipmap-${density.name}/ic_launcher_foreground.png (${density.size}x${density.size})`);
  }
  
  for (const density of legacySizes) {
    const outputPath = path.join(outputDir, `mipmap-${density.name}`, 'ic_launcher.png');
    const roundPath = path.join(outputDir, `mipmap-${density.name}`, 'ic_launcher_round.png');
    
    await sharp(logoBuffer)
      .resize(density.size, density.size, {
        fit: 'contain',
        background: { r: 10, g: 30, b: 52, alpha: 1 }
      })
      .png()
      .toFile(outputPath);
    
    await sharp(logoBuffer)
      .resize(density.size, density.size, {
        fit: 'contain',
        background: { r: 10, g: 30, b: 52, alpha: 1 }
      })
      .png()
      .toFile(roundPath);
    
    console.log(`Generated legacy: mipmap-${density.name}/ic_launcher.png & ic_launcher_round.png (${density.size}x${density.size})`);
  }
  
  console.log('\nAll icons generated successfully!');
}

generateForegrounds().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});