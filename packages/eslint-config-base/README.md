# @m-thalmann/eslint-config-base

> [!NOTE]  
> This package only supports the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new)

This package provides a base configuration for the [ESLint](https://eslint.org) code linter.

## Installation

```bash
npm install --save-dev @m-thalmann/eslint-config-base
```

You also need the following dependencies:

```bash
npm install --save-dev globals

# only if you use the prettier formatter
npm install --save-dev eslint-config-prettier
```

## Usage

Create a `eslint.config.js` file with the following contents:

```javascript
const globals = require('globals');

const baseConfig = require('@m-thalmann/eslint-config-base');
// ... any other configurations

// only if you use the prettier formatter
const prettierConfig = require('eslint-config-prettier');

module.exports = {
  {
    // add ignored paths
    ignores: ['**/dist'],
  },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  ...baseConfig,
  // ... add additional configurations

  // put this last (only required if you use prettier)
  prettierConfig,

  // ... override any project-specific settings
};
```

> [!Important]
> When using flat config files with VSCode for the first time you need to make sure to enable the `eslint.experimental.useFlatConfig` setting

## License

This package is released under the [MIT License](LICENSE).
