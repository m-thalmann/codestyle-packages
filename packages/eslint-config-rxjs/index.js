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
            '^Store$': false,
          },
          variables: true,
        },
      ],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-async-subscribe.md
      'rxjs/no-async-subscribe': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-create.md
      'rxjs/no-create': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-exposed-subjects.md
      'rxjs/no-exposed-subjects': ['warn', { allowProtected: true }],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-ignored-takewhile-value.md
      'rxjs/no-ignored-takewhile-value': ['warn'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-index.md
      'rxjs/no-index': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-internal.md
      'rxjs/no-internal': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-nested-subscribe.md
      'rxjs/no-nested-subscribe': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-sharereplay.md
      'rxjs/no-sharereplay': ['warn', { allowConfig: true }],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-subject-value.md
      'rxjs/no-subject-value': ['warn'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-unbound-methods.md
      'rxjs/no-unbound-methods': ['error'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-unsafe-subject-next.md
      'rxjs/no-unsafe-subject-next': ['warn'],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-unsafe-takeuntil.md
      'rxjs/no-unsafe-takeuntil': [
        'error',
        {
          alias: ['takeUntilDestroyed'],
        },
      ],

      // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/throw-error.md
      'rxjs/throw-error': ['warn'],
    },
  },
];
