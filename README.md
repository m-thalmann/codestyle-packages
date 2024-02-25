# CodeStyle Packages

This repository contains packages for various codestyle and linting tools:

- [Prettier Config](packages/prettier-config/README.md)

## Development setup

To test these packages you can use the `npm run start-local-registry` command. This will start a local NPM registry and set it as the configured one for the current workspace. Any packages you publish, will be published to that registry.

You can publish the packages using the `nx release publish` command.

If you want to install these locally published packages you can simply copy the generated `.npmrc` file to your target workspace and install the packages as you would normally or use the `--registry <registry>` flag:

`npm i -D --registry http://localhost:4873 <package>`

## License

This repository is released under the [MIT License](LICENSE).
