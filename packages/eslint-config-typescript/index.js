const bestPracticeRules = require('./rules/best-practices');
const typeRules = require('./rules/types');
const variableRules = require('./rules/variables');

const tsEslint = require('typescript-eslint');

/** @type {import("eslint").Linter.Config[]} */
module.exports = tsEslint.config(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    extends: [...tsEslint.configs.strictTypeChecked],
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
