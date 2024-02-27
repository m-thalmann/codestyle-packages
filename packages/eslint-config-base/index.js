const bestPracticeRules = require('./rules/best-practices');
const errorRules = require('./rules/errors');
const variableRules = require('./rules/variables');

const eslintJsConfig = require('@eslint/js');

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  eslintJsConfig.configs.recommended,

  {
    rules: {
      ...bestPracticeRules,
      ...errorRules,
      ...variableRules,
    },
  },

  {
    // disable init-declarations rule in test files for convenience
    files: ['**/spec.js', '**/*.test.js'],
    rules: { 'init-declarations': 'off' },
  },
];
