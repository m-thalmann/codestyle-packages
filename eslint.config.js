const globals = require('globals');

const baseConfig = require('@m-thalmann/eslint-config-base');
const prettierConfig = require('eslint-config-prettier');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    ignores: ['packages/**/dist', '.nx/cache', 'tmp'],
  },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  ...baseConfig,
  prettierConfig,
];
