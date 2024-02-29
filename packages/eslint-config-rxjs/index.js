const rxjsPlugin = require('eslint-plugin-rxjs');

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      rxjs: rxjsPlugin,
    },
    rules: {
      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/finnish.md
      'rxjs/finnish': [
        'warn',
        {
          functions: false,
          methods: false,
          parameters: true,
          properties: true,
          strict: true,
          types: {
            '^EventEmitter$': false,
          },
          variables: true,
        },
      ],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-async-subscribe.md
      'rxjs/no-async-subscribe': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-create.md
      'rxjs/no-create': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-nested-subscribe.md
      'rxjs/no-nested-subscribe': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-sharereplay.md
      'rxjs/no-sharereplay': ['warn', { allowConfig: true }],
    },
  },
];
