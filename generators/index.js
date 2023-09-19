/**
 *
 * Generators
 *
 */

const componentGenerator = require('./component/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};

const pageGenerator = require('./page/index.js');

module.exports = plop => {
  plop.setGenerator('page', pageGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
