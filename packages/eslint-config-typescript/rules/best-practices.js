const [
  ,
  {
    rules: {
      'no-magic-numbers': [, baseNoMagicNumbersConfig],
      'no-unused-expressions': [, baseNoUnusedExpressionsConfig],
    },
  },
] = require('@m-thalmann/eslint-config-base');

/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
  // https://typescript-eslint.io/rules/adjacent-overload-signatures/
  '@typescript-eslint/adjacent-overload-signatures': ['error'],

  // https://typescript-eslint.io/rules/consistent-indexed-object-style/
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

  // https://typescript-eslint.io/rules/explicit-member-accessibility/
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'no-public',
      overrides: {
        parameterProperties: 'explicit',
      },
    },
  ],

  // https://typescript-eslint.io/rules/member-ordering/
  '@typescript-eslint/member-ordering': [
    'warn',
    {
      default: {
        memberTypes: [
          // signatures
          'signature',

          // fields
          'static-field',
          'field',

          // static initializations
          'static-initialization',

          // constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          // methods
          'abstract-method',
          'instance-method',
          'static-method',
          'method',
        ],
      },
    },
  ],

  // https://typescript-eslint.io/rules/naming-convention/
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'classProperty',
      modifiers: ['static'],
      format: ['UPPER_CASE'],
    },
    {
      selector: 'enumMember',
      format: ['PascalCase'],
    },
    {
      selector: 'typeParameter',
      format: ['PascalCase'],
      prefix: ['T'],
      filter: {
        regex: '^[A-Z]$',
        match: false,
      },
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],

  // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
  '@typescript-eslint/no-confusing-non-null-assertion': ['warn'],

  // https://typescript-eslint.io/rules/no-confusing-void-expression/
  '@typescript-eslint/no-confusing-void-expression': ['warn', { ignoreArrowShorthand: true }],

  // https://typescript-eslint.io/rules/no-empty-function
  'no-empty-function': ['off'],
  '@typescript-eslint/no-empty-function': ['error'],

  // https://typescript-eslint.io/rules/no-floating-promises
  '@typescript-eslint/no-floating-promises': ['off'],

  // https://typescript-eslint.io/rules/no-loop-func/
  'no-loop-func': ['off'],
  '@typescript-eslint/no-loop-func': ['error'],

  // https://typescript-eslint.io/rules/no-loss-of-precision/
  'no-loss-of-precision': ['off'],
  '@typescript-eslint/no-loss-of-precision': ['error'],

  // https://eslint.org/docs/latest/rules/no-magic-numbers
  'no-magic-numbers': ['off'],
  '@typescript-eslint/no-magic-numbers': [
    'warn',
    {
      ...baseNoMagicNumbersConfig,

      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
    },
  ],

  // https://typescript-eslint.io/rules/no-misused-promises/
  '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: false }],

  // https://typescript-eslint.io/rules/no-throw-literal/
  'no-throw-literal': ['off'],
  '@typescript-eslint/no-throw-literal': ['error'],

  // https://typescript-eslint.io/rules/no-unused-expressions/
  'no-unused-expressions': ['off'],
  '@typescript-eslint/no-unused-expressions': ['error', baseNoUnusedExpressionsConfig],

  // https://typescript-eslint.io/rules/no-useless-template-literals/
  '@typescript-eslint/no-useless-template-literals': ['error'],

  // https://typescript-eslint.io/rules/prefer-for-of/
  '@typescript-eslint/prefer-for-of': ['warn'],

  // https://typescript-eslint.io/rules/prefer-includes/
  '@typescript-eslint/prefer-includes': ['warn'],

  // https://typescript-eslint.io/rules/prefer-optional-chain/
  '@typescript-eslint/prefer-optional-chain': ['error'],

  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
  '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],

  // https://typescript-eslint.io/rules/promise-function-async/
  '@typescript-eslint/promise-function-async': ['error'],

  // https://typescript-eslint.io/rules/require-array-sort-compare/
  '@typescript-eslint/require-array-sort-compare': ['warn', { ignoreStringArrays: true }],

  // https://typescript-eslint.io/rules/require-await/
  '@typescript-eslint/require-await': ['off'],

  // https://typescript-eslint.io/rules/return-await/
  'no-return-await': ['off'],
  '@typescript-eslint/return-await': ['error', 'always'],

  // https://typescript-eslint.io/rules/strict-boolean-expressions/
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowNullableBoolean: true,
      allowNullableString: true,
    },
  ],

  // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
  '@typescript-eslint/switch-exhaustiveness-check': ['warn'],
};
