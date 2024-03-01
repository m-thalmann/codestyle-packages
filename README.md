# CodeStyle Packages

This repository contains packages for various codestyle and linting tools:

- [Prettier Config](packages/prettier-config/README.md)
- [ESLint Config Base](packages/eslint-config-base/README.md)
- [ESLint Config TypeScript](packages/eslint-config-typescript/README.md)
- [ESLint Config RxJS](packages/eslint-config-rxjs/README.md)
- [ESLint Config Angular](packages/eslint-config-angular/README.md)

## Development setup

When setting up the repository run the `nx run-many -t build` command to build the packages. This is required in order for the Prettier and ESLint configs to work properly.

To test these packages you can use the `npm run start-local-registry` command. This will start a local NPM registry and set it as the configured one for the current workspace. Any packages you publish, will be published to that registry.

You can publish the packages using the `nx release publish` command.

If you want to install these locally published packages you can simply use the `--registry <registry>` flag:

`npm i -D --registry http://localhost:4873 <package>`

Alternatively you can copy the generated `.npmrc` file to your target workspace and install the packages as you would normally.

## License

This repository is released under the [MIT License](LICENSE).
