const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

html = html.replace(/%DRIBBBLE_API_TOKEN%/g, process.env.DRIBBBLE_API_TOKEN);
fs.writeFileSync(filePath, html);