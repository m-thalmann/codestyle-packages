const rxjsPlugin = require('@smarttools/eslint-plugin-rxjs');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...rxjsPlugin.configs.recommended,
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      rxjs: rxjsPlugin,
    },
    rules: {
      // https://github.com/DaveMBush/eslint-plugin-rxjs/blob/main/packages/eslint-plugin-rxjs/docs/rules/finnish.md
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
            '^Store$': false,
          },
          variables: true,
        },
      ],

      // https://github.com/DaveMBush/eslint-plugin-rxjs/blob/main/packages/eslint-plugin-rxjs/docs/rules/no-exposed-subjects.md
      'rxjs/no-exposed-subjects': ['warn', { allowProtected: true }],

      // https://github.com/DaveMBush/eslint-plugin-rxjs/blob/main/packages/eslint-plugin-rxjs/docs/rules/no-ignored-observable.md
      'rxjs/no-ignored-observable': ['warn'],

      // https://github.com/DaveMBush/eslint-plugin-rxjs/blob/main/packages/eslint-plugin-rxjs/docs/rules/no-subscribe-handlers.md
      'rxjs/no-subscribe-handlers': ['warn'],

      // https://github.com/DaveMBush/eslint-plugin-rxjs/blob/main/packages/eslint-plugin-rxjs/docs/rules/no-unsafe-takeuntil.md
      'rxjs/no-unsafe-takeuntil': [
        'error',
        {
          alias: ['takeUntilDestroyed'],
        },
      ],

      // https://github.com/DaveMBush/eslint-plugin-rxjs/blob/main/packages/eslint-plugin-rxjs/docs/rules/throw-error.md
      'rxjs/throw-error': ['warn'],
    },
  },
];
