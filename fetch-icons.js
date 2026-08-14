const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = [
  'store',
  'lock',
  'check_circle',
  'arrow_back',
  'arrow_forward',
  'backspace',
  'info'
];

const targetDir = path.join(__dirname, 'src', 'assets', 'icons', 'startup');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function fetchIcon(icon) {
  // Try the symbols directory
  const url = `https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/${icon}/materialsymbolsoutlined/${icon}_24px.svg`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          fs.writeFileSync(path.join(targetDir, `${icon}.svg`), data);
          console.log(`Downloaded ${icon}.svg`);
          resolve(true);
        });
      } else {
        // Fallback to older material icons repo structure if symbols isn't found
        console.log(`Failed to fetch ${icon} from symbols, trying fallback`);
        reject(`Status: ${res.statusCode}`);
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const icon of icons) {
    try {
      await fetchIcon(icon);
    } catch (e) {
      console.error(`Error fetching ${icon}:`, e);
    }
  }
}

run();
