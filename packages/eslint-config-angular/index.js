const baseRules = require('./rules/base');
const templateRules = require('./rules/template');

const typescriptConfig = require('@m-thalmann/eslint-config-typescript');
const rxjsConfig = require('@m-thalmann/eslint-config-rxjs');

const angularEslint = require('@angular-eslint/eslint-plugin');
const angularTemplateEslint = require('@angular-eslint/eslint-plugin-template');

const angularTemplateParser = require('@angular-eslint/template-parser');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...typescriptConfig,
  ...rxjsConfig,

  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': angularEslint,
      '@angular-eslint/template': angularTemplateEslint,
    },
    processor: '@angular-eslint/template/extract-inline-html',
    rules: {
      ...angularEslint.configs.recommended.rules,
      ...baseRules,

      // disables the unbound method check (otherwise seems to throw an error on linting in Angular projects)
      // https://typescript-eslint.io/rules/unbound-method
      '@typescript-eslint/unbound-method': ['off'],
    },
  },

  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angularTemplateEslint,
    },
    languageOptions: {
      parser: angularTemplateParser,
    },
    rules: {
      ...angularTemplateEslint.configs.recommended.rules,
      ...templateRules,

      // must be disabled, otherwise will throw an error while linting
      // https://eslint.org/docs/latest/rules/no-eval
      'no-eval': ['off'],
    },
  },
];
