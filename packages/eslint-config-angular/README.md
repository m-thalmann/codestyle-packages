# @m-thalmann/eslint-config-angular

> [!NOTE]  
> This package only supports the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new)

This package provides a base configuration for the [Angular ESLint Plugin](https://github.com/angular-eslint/angular-eslint/)

## Installation

> [!NOTE]
> You should also install the `@m-thalmann/eslint-config-base` package and set it up like described in it's README

```bash
npm install --save-dev @m-thalmann/eslint-config-angular
```

> [!IMPORTANT]  
> This configuration already ships with the `@m-thalmann/eslint-config-typescript` and `@m-thalmann/eslint-config-rxjs`, so no need to install them manually

## Usage

Add the config to your `eslint.config.js` file:

```javascript
// ...

const angularConfig = require('@m-thalmann/eslint-config-angular');

module.exports = [
  // ... other configurations

  // setup typescript usage!

  ...angularConfig,

  // if you are using Prettier put it's config here

  // ... override any project-specific settings
];
```

> [!Important]
> You need to setup the TypeScript usage for the `@m-thalmann/eslint-config-typescript` package as described in it's README (you don't need to install it, it's a peer dependency of this package)

If you want to customize the used prefixes for the components and directives, you have to overwrite the rules:

```javascript
module.exports = [
  // ... after applying the angular config
  {
    files: ['*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'myApp',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'my-app',
          style: 'kebab-case',
        },
      ],
    },
  },
];
```

> [!Tip]
> When using flat config files with VSCode for the first time you need to make sure to enable the `eslint.experimental.useFlatConfig` setting

## License

This package is released under the [MIT License](LICENSE).
