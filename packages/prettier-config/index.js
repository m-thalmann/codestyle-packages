/** @type {import("prettier").Config} */
const defaultConfig = {
  printWidth: 120,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
};

const phpConfig = (version = undefined) => ({
  plugins: ['@prettier/plugin-php'],
  phpVersion: version,
  overrides: [
    {
      files: '*.php',
      options: {
        singleQuote: true,
        trailingCommaPHP: true,
        braceStyle: '1tbs',
        parser: 'php',
      },
    },
  ],
});

const mergeConfigs = (...configs) =>
  configs.reduce((config, item) => ({
    ...config,
    ...item,
    plugins: [...(config.plugins || []), ...(item.plugins || [])],
    overrides: [...(config.overrides || []), ...(item.overrides || [])],
  }));

module.exports = {
  default: defaultConfig,
  php: phpConfig,
  merge: mergeConfigs,
};
