# @m-thalmann/prettier-config

This package provides a shareable config for the [Prettier](https://prettier.io) code formatter.

## Installation

```bash
npm install --save-dev @m-thalmann/prettier-config
```

## Usage

Create a `.prettierrc.cjs` file with the following content:

```javascript
const prettierConfig = require('@m-thalmann/prettier-config');

module.exports = prettierConfig.default;
```

If you want to overwrite some settings or have additional configs to use, you can do so by using the `merge()` function:

```javascript
const prettierConfig = require('@m-thalmann/prettier-config');

const projectConfig = {
  // override any project-specific settings
};

module.exports = prettierConfig.merge(prettierConfig.default, projectConfig);
```

The `prettierConfig.merge()` function receives at least one configuration to merge with. The configurations are merged from left to right, so the last configuration will override the previous ones.

### Additional configs

#### PHP

For PHP projects, you can also include the `php` config:

```javascript
const prettierConfig = require('@m-thalmann/prettier-config');

const projectConfig = {
  // override any project-specific settings
};

module.exports = prettierConfig.merge(
  prettierConfig.default,
  prettierConfig.php('8.1'), // set your project's PHP version (optional)
  projectConfig,
);
```

Make sure to also install the `@prettier/plugin-php` package:

```bash
npm install --save-dev @prettier/plugin-php
```

The configuration for the PHP config is applied within the `overrides` array (only applying to `*.php` files).

> [!NOTE]  
> When using VS Code you have to take care of some additional settings to make the PHP plugin work correctly. See the [Prettier PHP Plugin](https://github.com/prettier/plugin-php?tab=readme-ov-file#visual-studio-code) documentation for more information.

## License

This package is released under the [MIT License](LICENSE).
