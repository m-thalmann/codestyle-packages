# @m-thalmann/eslint-config-rxjs

> [!NOTE]  
> This package only supports the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new)

This package provides a base configuration for the [RxJS ESLint Plugin](https://github.com/cartant/eslint-plugin-rxjs)

## Installation

> [!NOTE]  
> You should also install the `@m-thalmann/eslint-config-base` package and set it up like described in it's README

```bash
npm install --save-dev @m-thalmann/eslint-config-rxjs
```

## Usage

Add the config to your `eslint.config.js` file:

```javascript
// ...

const rxjsConfig = require('@m-thalmann/eslint-config-rxjs');

module.exports = [
  // ... other configurations

  // setup typescript usage!

  ...rxjsConfig,

  // if you are using Prettier put it's config here

  // ... override any project-specific settings
];
```

> [!Important]
> You need to setup the TypeScript usage for the `@m-thalmann/eslint-config-typescript` package as described in it's README (you don't need to install it, it's a peer dependency of this package)

> [!Tip]
> When using flat config files with VSCode for the first time you need to make sure to enable the `eslint.experimental.useFlatConfig` setting

## License

This package is released under the [MIT License](LICENSE).
