/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://typescript-eslint.io/rules/array-type/
  '@typescript-eslint/array-type': ['error', { default: 'generic' }],

  // https://typescript-eslint.io/rules/consistent-generic-constructors/
  '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],

  // https://typescript-eslint.io/rules/consistent-type-assertions/
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],

  // https://typescript-eslint.io/rules/consistent-type-definitions/
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

  // https://typescript-eslint.io/rules/explicit-function-return-type/
  '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

  // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
  '@typescript-eslint/non-nullable-type-assertion-style': ['error'],

  // https://typescript-eslint.io/rules/no-unnecessary-type-parameters/
  '@typescript-eslint/no-unnecessary-type-parameters': ['off'],

  // https://typescript-eslint.io/rules/sort-type-constituents/
  '@typescript-eslint/sort-type-constituents': ['error'],

  // https://typescript-eslint.io/rules/typedef/
  '@typescript-eslint/typedef': [
    'error',
    {
      memberVariableDeclaration: true,
      parameter: true,
      propertyDeclaration: true,
    },
  ],
};
