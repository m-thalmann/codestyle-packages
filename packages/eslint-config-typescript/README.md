# @m-thalmann/eslint-config-typescript

> [!NOTE]  
> This package only supports the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new)

This package provides a base configuration for the [TypeScript ESLint Plugin](https://typescript-eslint.io/)

## Installation

> [!NOTE]  
> You should also install the `@m-thalmann/eslint-config-base` package and set it up like described in it's README

```bash
npm install --save-dev @m-thalmann/eslint-config-typescript
```

## Usage

Add the config to your `eslint.config.js` file:

```javascript
// ...

const typeScriptConfig = require('eslint-config-typescript');

module.exports = {
  // ... other configurations

  ...typeScriptConfig,

  // if you are using Prettier put it's config here

  // ... override any project-specific settings
};
```

> [!Important]
> When using flat config files with VSCode for the first time you need to make sure to enable the `eslint.experimental.useFlatConfig` setting

### Configure TypeScript usage

You have to include additional metadata in your root eslint-config for this package:

```js
module.exports = [
  // ...
  {
    files: ['**/*.ts'], // add all file-types you want to lint with TypeScript (ts, tsx, mts, cts)
    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.base.json', // path to your root tsconfig

          // for monorepos: define additional tsconfig files for different projects
          // see https://typescript-eslint.io/linting/typed-linting/monorepos/#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
          './apps/*/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
      },
    },
  },
  // ...
];
```

Also you have to at least enable `strictNullChecks` in your `tsconfig`.
<br>
It is **recommended** to use `strict` though, to enable all strict TypeScript checks:

```json
{
  // ...
  "compilerOptions": {
    // ...

    "strict": true,
    // or
    "strictNullChecks": true
  }
}
```

## License

This package is released under the [MIT License](LICENSE).
