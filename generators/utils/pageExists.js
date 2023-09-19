const fs = require('fs');
const path = require('path');

const pageLocation = fs.readdirSync(path.join(__dirname, '../../src/pages'));
const page = pageLocation;

function pageExists(comp) {
  return page.indexOf(comp) >= 0;
}

module.exports = pageExists;
