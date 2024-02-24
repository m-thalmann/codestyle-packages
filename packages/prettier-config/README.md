# Prettier Config

This package provides a shareable config for the [Prettier](https://prettier.io) code formatter.

## Installation

```bash
npm install --save-dev @m-thalmann/prettier-config
```

## Usage

Add the following to your `package.json`:

```json
{
  "prettier": "@m-thalmann/prettier-config"
}
```

or create a `.prettierrc.js` file with the following content:

```javascript
const baseConfig = require('@m-thalmann/prettier-config');

module.exports = {
  ...baseConfig,
  // override any project-specific settings
};
```

See the [Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations) for more information.

## License

This package is released under the [MIT License](LICENSE).
