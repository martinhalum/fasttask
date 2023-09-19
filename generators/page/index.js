/**
 *
 * Page Generator
 */

/* eslint strict: ["off"] */

'use strict';

const pageExists = require('../utils/pageExists');

module.exports = {
  description: 'Add an unconnected page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Type the name of the page',
      default: 'Page',
      validate: value => {
        if (/.+/.test(value)) {
          return pageExists(value)
            ? 'A page with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/index.ts',
        templateFile: './page/index.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: './page/stateless.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/__tests__/{{properCase name}}-test.tsx',
        templateFile: './page/test.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/config/index.ts',
        templateFile: './page/config.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/pages/{{properCase name}}/types/index.ts',
        templateFile: './page/types.ts.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
