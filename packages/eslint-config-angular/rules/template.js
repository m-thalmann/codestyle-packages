/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/attributes-order.md
  '@angular-eslint/template/attributes-order': ['warn'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/no-duplicate-attributes.md
  '@angular-eslint/template/no-duplicate-attributes': ['error', { allowTwoWayDataBinding: true }],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/no-any.md
  '@angular-eslint/template/no-any': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/no-interpolation-in-attributes.md
  '@angular-eslint/template/no-interpolation-in-attributes': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/prefer-control-flow.md
  '@angular-eslint/template/prefer-control-flow': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/prefer-self-closing-tags.md
  '@angular-eslint/template/prefer-self-closing-tags': ['warn'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/use-track-by-function.md
  '@angular-eslint/template/use-track-by-function': ['warn'],
};
