/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-async-lifecycle-method.md
  '@angular-eslint/no-async-lifecycle-method': ['warn'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md
  '@angular-eslint/sort-lifecycle-methods': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md
  '@angular-eslint/component-selector': [
    'error',
    {
      type: 'element',
      prefix: 'app',
      style: 'kebab-case',
    },
  ],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/contextual-decorator.md
  '@angular-eslint/contextual-decorator': ['warn'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md
  '@angular-eslint/directive-selector': [
    'error',
    {
      type: 'attribute',
      prefix: 'app',
      style: 'camelCase',
    },
  ],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-conflicting-lifecycle.md
  '@angular-eslint/no-conflicting-lifecycle': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicates-in-metadata-arrays.md
  '@angular-eslint/no-duplicates-in-metadata-arrays': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-host-metadata-property.md
  '@angular-eslint/no-host-metadata-property': ['error', { allowStatic: true }],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md
  '@angular-eslint/no-lifecycle-call': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-pipe-impure.md
  '@angular-eslint/no-pipe-impure': ['warn'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md
  '@angular-eslint/prefer-on-push-component-change-detection': ['warn'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md
  '@angular-eslint/prefer-output-readonly': ['warn'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md
  '@angular-eslint/prefer-signals': ['warn', { useTypeChecking: true }],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md
  '@angular-eslint/relative-url-prefix': ['error'],

  // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-lifecycle-interface.md
  '@angular-eslint/use-lifecycle-interface': ['error'],
};
