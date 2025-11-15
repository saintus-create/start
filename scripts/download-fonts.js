const fs = require('fs');
const https = require('https');
const path = require('path');

// Create fonts directory if it doesn't exist
const fontsDir = path.join(process.cwd(), 'public/fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Switzer font files to download
const fontFiles = [
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-100-normal.woff2',
    filename: 'Switzer-Thin.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-200-normal.woff2',
    filename: 'Switzer-ExtraLight.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-300-normal.woff2',
    filename: 'Switzer-Light.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-400-normal.woff2',
    filename: 'Switzer-Regular.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-500-normal.woff2',
    filename: 'Switzer-Medium.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-600-normal.woff2',
    filename: 'Switzer-SemiBold.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-700-normal.woff2',
    filename: 'Switzer-Bold.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-800-normal.woff2',
    filename: 'Switzer-ExtraBold.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-900-normal.woff2',
    filename: 'Switzer-Black.woff2'
  },
  {
    url: 'https://github.com/weiweihuanghuang/fontsource/raw/main/fonts/switzer/files/switzer-latin-variable-wghtOnly-normal.woff2',
    filename: 'Switzer-Variable.woff2'
  }
];

// Download function
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(fontsDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve(true);
      });
      
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Download all font files
async function downloadFonts() {
  console.log('Starting font download...');
  
  try {
    for (const file of fontFiles) {
      await downloadFile(file.url, file.filename);
    }
    console.log('All fonts downloaded successfully!');
  } catch (error) {
    console.error('Error downloading fonts:', error);
    process.exit(1);
  }
}

// Run the download
downloadFonts();
