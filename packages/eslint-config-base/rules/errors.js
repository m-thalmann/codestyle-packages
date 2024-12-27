/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://eslint.org/docs/latest/rules/array-callback-return
  'array-callback-return': ['warn'],

  // https://eslint.org/docs/latest/rules/no-self-compare
  'no-self-compare': ['error'],

  // https://eslint.org/docs/latest/rules/no-template-curly-in-string
  'no-template-curly-in-string': ['warn'],

  // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': ['error'],

  // https://eslint.org/docs/latest/rules/no-unreachable-loop
  'no-unreachable-loop': ['error'],

  // https://eslint.org/docs/latest/rules/no-unsafe-negation
  'no-unsafe-negation': ['warn', { enforceForOrderingRelations: true }],

  // https://eslint.org/docs/latest/rules/no-use-before-define
  'no-use-before-define': ['error'],

  // https://eslint.org/docs/latest/rules/block-scoped-var
  'block-scoped-var': ['warn'],

  // https://eslint.org/docs/latest/rules/eqeqeq
  eqeqeq: ['error'],

  // https://eslint.org/docs/latest/rules/no-extend-native
  'no-extend-native': ['error'],

  // https://eslint.org/docs/latest/rules/no-loop-func
  'no-loop-func': ['error'],

  // https://eslint.org/docs/latest/rules/no-sequences
  'no-sequences': ['error', { allowInParentheses: false }],

  // https://eslint.org/docs/latest/rules/require-atomic-updates
  'require-atomic-updates': ['warn'],
};
