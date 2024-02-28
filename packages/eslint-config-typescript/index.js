const bestPracticeRules = require('./rules/best-practices');
const typeRules = require('./rules/types');
const variableRules = require('./rules/variables');

const tsEslint = require('typescript-eslint');

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = tsEslint.config(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    extends: [...tsEslint.configs.recommendedTypeChecked],
    languageOptions: {
      parser: tsEslint.parser,
    },
    rules: {
      ...bestPracticeRules,
      ...typeRules,
      ...variableRules,
    },
  },
  {
    // disable init-declarations rule in test files for convenience
    files: ['**/*.spec.ts', '**/*.test.ts'],
    rules: { '@typescript-eslint/init-declarations': 'off' },
  },
);
