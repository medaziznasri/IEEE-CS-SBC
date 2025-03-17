/**
 * This script helps you download font files from Google Fonts to host them locally
 * Run this script with Node.js to download the necessary font files
 * 
 * Usage: node download-fonts.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Ensure fonts directory exists
const fontsDir = path.join(__dirname);
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Font files to download
const fontFiles = [
  {
    url: 'https://fonts.gstatic.com/s/worksans/v18/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiAJpp_c.woff2',
    filename: 'work-sans-v18-latin-regular.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/worksans/v18/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiAJpp_c.woff2',
    filename: 'work-sans-v18-latin-600.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/worksans/v18/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K8nQBiAJpp_c.woff2',
    filename: 'work-sans-v18-latin-800.woff2'
  }
];

// Download each font file
fontFiles.forEach(font => {
  const filePath = path.join(fontsDir, font.filename);
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`File ${font.filename} already exists.`);
    return;
  }
  
  console.log(`Downloading ${font.filename}...`);
  
  const file = fs.createWriteStream(filePath);
  
  https.get(font.url, response => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${font.filename}. Status code: ${response.statusCode}`);
      fs.unlink(filePath, () => {});
      return;
    }
    
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Successfully downloaded ${font.filename}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${font.filename}: ${err.message}`);
  });
});

console.log('Script execution completed. If you see any errors, you may need to manually download the font files.');
