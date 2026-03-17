const { 'no-unused-vars': baseNoUnusedVarsConfig } = require('../../../libs/shared/util-eslint/src/lib/shared-configs');

/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://typescript-eslint.io/rules/default-param-last/
  'default-param-last': ['off'],
  '@typescript-eslint/default-param-last': ['error'],

  // https://typescript-eslint.io/rules/dot-notation/
  'dot-notation': ['off'],
  '@typescript-eslint/dot-notation': ['error'],

  // https://typescript-eslint.io/rules/init-declarations/
  'init-declarations': ['off'],
  '@typescript-eslint/init-declarations': ['warn'],

  // https://typescript-eslint.io/rules/no-shadow/
  'no-shadow': ['off'],
  '@typescript-eslint/no-shadow': ['warn'],

  // https://typescript-eslint.io/rules/no-unused-private-class-members/
  'no-unused-private-class-members': ['off'],
  '@typescript-eslint/no-unused-private-class-members': ['warn'],

  // https://typescript-eslint.io/rules/no-unused-vars/
  'no-unused-vars': ['off'],
  '@typescript-eslint/no-unused-vars': ['warn', baseNoUnusedVarsConfig],

  // https://typescript-eslint.io/rules/no-use-before-define/
  'no-use-before-define': ['off'],
  '@typescript-eslint/no-use-before-define': ['error'],

  // https://typescript-eslint.io/rules/prefer-readonly/
  '@typescript-eslint/prefer-readonly': ['error'],
};
