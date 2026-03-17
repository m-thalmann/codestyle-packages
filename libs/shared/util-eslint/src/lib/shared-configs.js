module.exports = {
  'no-magic-numbers': {
    ignore: [-1, 0, 1, 100, 1000],
    ignoreArrayIndexes: false,
    ignoreDefaultValues: false,
    ignoreClassFieldInitialValues: false,
    enforceConst: true,
    detectObjects: false,
  },
  'no-unused-expressions': {
    allowShortCircuit: false,
    allowTernary: false,
  },
  'no-unused-vars': { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' },
};
