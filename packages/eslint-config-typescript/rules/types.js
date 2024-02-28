/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://typescript-eslint.io/rules/array-type/
  '@typescript-eslint/array-type': ['error', { default: 'generic' }],

  // https://typescript-eslint.io/rules/ban-types/
  '@typescript-eslint/ban-types': ['error'],

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

  // https://typescript-eslint.io/rules/no-explicit-any/
  '@typescript-eslint/no-explicit-any': ['error'],

  // https://typescript-eslint.io/rules/no-non-null-assertion/
  '@typescript-eslint/no-non-null-assertion': ['warn'],

  // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
  '@typescript-eslint/non-nullable-type-assertion-style': ['error'],

  // https://typescript-eslint.io/rules/no-unsafe-argument/
  '@typescript-eslint/no-unsafe-argument': ['error'],

  // https://typescript-eslint.io/rules/no-unsafe-assignment/
  '@typescript-eslint/no-unsafe-assignment': ['error'],

  // https://typescript-eslint.io/rules/prefer-as-const/
  '@typescript-eslint/prefer-as-const': ['error'],

  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
  '@typescript-eslint/prefer-reduce-type-parameter': ['error'],

  // https://typescript-eslint.io/rules/prefer-return-this-type/
  '@typescript-eslint/prefer-return-this-type': ['warn'],

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
