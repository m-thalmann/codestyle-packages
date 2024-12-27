/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://eslint.org/docs/latest/rules/no-unused-private-class-members
  'no-unused-private-class-members': ['warn'],

  // https://eslint.org/docs/latest/rules/no-unused-vars
  'no-unused-vars': [
    'warn',
    {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],

  // https://eslint.org/docs/latest/rules/default-param-last
  'default-param-last': ['error'],

  // https://eslint.org/docs/latest/rules/dot-notation
  'dot-notation': ['error'],

  // https://eslint.org/docs/latest/rules/init-declarations
  'init-declarations': ['warn', 'always'],

  // https://eslint.org/docs/latest/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // https://eslint.org/docs/latest/rules/no-param-reassign
  'no-param-reassign': ['error'],

  // https://eslint.org/docs/latest/rules/no-return-assign
  'no-return-assign': ['error'],

  // https://eslint.org/docs/latest/rules/no-shadow
  'no-shadow': ['warn'],

  // https://eslint.org/docs/latest/rules/no-var
  'no-var': ['warn'],

  // https://eslint.org/docs/latest/rules/one-var
  'one-var': ['warn', 'never'],

  // https://eslint.org/docs/latest/rules/operator-assignment
  'operator-assignment': ['warn', 'always'],

  // https://eslint.org/docs/latest/rules/prefer-const
  'prefer-const': ['warn'],
};
