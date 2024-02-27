/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://eslint.org/docs/latest/rules/no-await-in-loop
  'no-await-in-loop': ['warn'],

  // https://eslint.org/docs/latest/rules/no-debugger
  'no-debugger': ['warn'],

  // https://eslint.org/docs/latest/rules/no-duplicate-imports
  'no-duplicate-imports': ['error'],

  // https://eslint.org/docs/latest/rules/no-fallthrough
  'no-fallthrough': ['error'],

  // https://eslint.org/docs/latest/rules/arrow-body-style
  'arrow-body-style': ['warn', 'as-needed'],

  // https://eslint.org/docs/latest/rules/camelcase
  camelcase: ['error'],

  // https://eslint.org/docs/latest/rules/consistent-return
  'consistent-return': ['error'],

  // https://eslint.org/docs/latest/rules/curly
  curly: ['error'],

  // https://eslint.org/docs/latest/rules/default-case
  'default-case': ['error'],

  // https://eslint.org/docs/latest/rules/default-case-last
  'default-case-last': ['error'],

  // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': ['error', 'setBeforeGet'],

  // https://eslint.org/docs/latest/rules/func-style
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

  // https://eslint.org/docs/latest/rules/max-classes-per-file
  'max-classes-per-file': ['error'],

  // https://eslint.org/docs/latest/rules/max-depth
  'max-depth': ['error', { max: 4 }],

  // https://eslint.org/docs/latest/rules/max-lines
  'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],

  // https://eslint.org/docs/latest/rules/no-case-declarations
  'no-case-declarations': ['error'],

  // https://eslint.org/docs/latest/rules/no-console
  'no-console': ['warn'],

  // https://eslint.org/docs/latest/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // https://eslint.org/docs/latest/rules/no-empty
  'no-empty': ['error', { allowEmptyCatch: true }],

  // https://eslint.org/docs/latest/rules/no-empty-function
  'no-empty-function': ['error'],

  // https://eslint.org/docs/latest/rules/no-eval
  'no-eval': ['error'],

  // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

  // https://eslint.org/docs/latest/rules/no-implicit-coercion
  'no-implicit-coercion': ['error'],

  // https://eslint.org/docs/latest/rules/no-implied-eval
  'no-implied-eval': ['error'],

  // https://eslint.org/docs/latest/rules/no-inner-declarations
  'no-inner-declarations': ['error'],

  // https://eslint.org/docs/latest/rules/no-labels
  'no-labels': ['error'],

  // https://eslint.org/docs/latest/rules/no-lonely-if
  'no-lonely-if': ['warn'],

  // https://eslint.org/docs/latest/rules/no-magic-numbers
  'no-magic-numbers': [
    'warn',
    {
      ignore: [-1, 0, 1, 1000],
      ignoreArrayIndexes: false,
      ignoreDefaultValues: false,
      ignoreClassFieldInitialValues: false,
      enforceConst: true,
      detectObjects: false,
    },
  ],
  // https://eslint.org/docs/latest/rules/no-multi-str
  'no-multi-str': ['error'],

  // https://eslint.org/docs/latest/rules/no-negated-condition
  'no-negated-condition': ['warn'],

  // https://eslint.org/docs/latest/rules/no-nested-ternary
  'no-nested-ternary': ['error'],

  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  'no-new-native-nonconstructor': ['warn'],

  // https://eslint.org/docs/latest/rules/no-new-wrappers
  'no-new-wrappers': ['warn'],

  // https://eslint.org/docs/latest/rules/no-promise-executor-return
  'no-promise-executor-return': ['error'],

  // https://eslint.org/docs/latest/rules/no-script-url
  'no-script-url': ['error'],

  // https://eslint.org/docs/latest/rules/no-throw-literal
  'no-throw-literal': ['error'],

  // https://eslint.org/docs/latest/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error'],

  // https://eslint.org/docs/latest/rules/no-unused-expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
    },
  ],
  // https://eslint.org/docs/latest/rules/no-useless-concat
  'no-useless-concat': ['error'],

  // https://eslint.org/docs/latest/rules/no-useless-constructor
  'no-useless-constructor': ['warn'],

  // https://eslint.org/docs/latest/rules/no-useless-return
  'no-useless-return': ['error'],

  // https://eslint.org/docs/latest/rules/no-void
  'no-void': ['error'],

  // https://eslint.org/docs/latest/rules/object-shorthand
  'object-shorthand': ['error', 'always'],

  // https://eslint.org/docs/latest/rules/prefer-arrow-callback
  'prefer-arrow-callback': ['error'],

  // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error'],

  // https://eslint.org/docs/latest/rules/prefer-regex-literals
  'prefer-regex-literals': ['error'],

  // https://eslint.org/docs/latest/rules/prefer-rest-params
  'prefer-rest-params': ['warn'],

  // https://eslint.org/docs/latest/rules/prefer-spread
  'prefer-spread': ['error'],

  // https://eslint.org/docs/latest/rules/prefer-template
  'prefer-template': ['error'],

  // https://eslint.org/docs/latest/rules/require-await
  'require-await': ['off'],

  // https://eslint.org/docs/latest/rules/yoda
  yoda: ['error'],
};
