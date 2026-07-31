const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '../public/photos/doctors');
const OUTPUT_DIR = path.join(__dirname, '../public/photos/doctors/processed');

const VARIANTS = [
  { name: 'portrait', width: 400, height: 500 },
  { name: 'square',   width: 400, height: 400 },
  { name: 'wide',     width: 600, height: 400 },
  { name: 'narrow',   width: 300, height: 400 },
  { name: 'thumb',    width: 150, height: 150 },
];

async function processDoctor(n) {
  const input = path.join(INPUT_DIR, `doctor-${n}.jpg`);
  if (!fs.existsSync(input)) return;
  for (const v of VARIANTS) {
    const output = path.join(OUTPUT_DIR, `doctor-${n}-${v.name}.jpg`);
    await sharp(input)
      .resize(v.width, v.height, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 90 })
      .toFile(output);
    console.log(`doctor-${n}-${v.name}.jpg`);
  }
}

async function main() {
  for (let i = 1; i <= 25; i++) {
    await processDoctor(i);
  }
  console.log('Готово!');
}

main().catch(console.error);
