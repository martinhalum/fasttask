/**
 *
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description:
    'Add an unconnected component (atoms, molecules, organisms, layouts)',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Type the name of the component',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'folder',
      message: 'Where do you want to keep this component?',
      default: 'atoms',
      choices: () => ['atoms', 'molecules', 'organisms', 'layouts'],
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/index.ts',
        templateFile: './component/index.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: './component/stateless.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/__tests__/{{properCase name}}-test.tsx',
        templateFile: './component/test.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/config/index.ts',
        templateFile: './component/config.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/styles/index.ts',
        templateFile: './component/style.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/types/index.ts',
        templateFile: './component/types.ts.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
