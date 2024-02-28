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

  // https://typescript-eslint.io/rules/no-implied-eval/
  'no-implied-eval': ['off'],
  '@typescript-eslint/no-implied-eval': ['error'],

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

  // https://typescript-eslint.io/rules/no-mixed-enums/
  '@typescript-eslint/no-mixed-enums': ['error'],

  // https://typescript-eslint.io/rules/no-throw-literal/
  'no-throw-literal': ['off'],
  '@typescript-eslint/no-throw-literal': ['error'],

  // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],

  // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],

  // https://typescript-eslint.io/rules/no-unnecessary-condition/
  '@typescript-eslint/no-unnecessary-condition': ['error'],

  // https://typescript-eslint.io/rules/no-unsafe-call/
  '@typescript-eslint/no-unsafe-call': ['error'],

  // https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
  '@typescript-eslint/no-unsafe-declaration-merging': ['error'],

  // https://typescript-eslint.io/rules/no-unsafe-enum-comparison/
  '@typescript-eslint/no-unsafe-enum-comparison': ['warn'],

  // https://typescript-eslint.io/rules/no-unsafe-member-access/
  '@typescript-eslint/no-unsafe-member-access': ['error'],

  // https://typescript-eslint.io/rules/no-unsafe-return/
  '@typescript-eslint/no-unsafe-return': ['error'],

  // https://typescript-eslint.io/rules/no-unsafe-unary-minus/
  '@typescript-eslint/no-unsafe-unary-minus': ['error'],

  // https://typescript-eslint.io/rules/no-unused-expressions/
  'no-unused-expressions': ['off'],
  '@typescript-eslint/no-unused-expressions': ['error', baseNoUnusedExpressionsConfig],

  // https://typescript-eslint.io/rules/no-useless-constructor/
  'no-useless-constructor': ['off'],
  '@typescript-eslint/no-useless-constructor': ['warn'],

  // https://typescript-eslint.io/rules/no-useless-template-literals/
  '@typescript-eslint/no-useless-template-literals': ['error'],

  // https://typescript-eslint.io/rules/prefer-for-of/
  '@typescript-eslint/prefer-for-of': ['warn'],

  // https://typescript-eslint.io/rules/prefer-includes/
  '@typescript-eslint/prefer-includes': ['warn'],

  // https://typescript-eslint.io/rules/prefer-literal-enum-member/
  '@typescript-eslint/prefer-literal-enum-member': ['error'],

  // https://typescript-eslint.io/rules/prefer-optional-chain/
  '@typescript-eslint/prefer-optional-chain': ['error'],

  // https://typescript-eslint.io/rules/prefer-promise-reject-errors/
  'prefer-promise-reject-errors': ['off'],
  '@typescript-eslint/prefer-promise-reject-errors': ['error'],

  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
  '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],

  // https://typescript-eslint.io/rules/promise-function-async/
  '@typescript-eslint/promise-function-async': ['error'],

  // https://typescript-eslint.io/rules/require-array-sort-compare/
  '@typescript-eslint/require-array-sort-compare': ['warn', { ignoreStringArrays: true }],

  // https://typescript-eslint.io/rules/require-await/
  '@typescript-eslint/require-await': ['off'],

  // https://typescript-eslint.io/rules/restrict-plus-operands/
  '@typescript-eslint/restrict-plus-operands': ['warn'],

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

  // https://typescript-eslint.io/rules/unbound-method/
  '@typescript-eslint/unbound-method': ['error'],

  // https://typescript-eslint.io/rules/unified-signatures/
  '@typescript-eslint/unified-signatures': ['error'],
};
