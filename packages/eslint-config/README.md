# Juxly Eslint Config

@juxly/eslint-config is a shareable configuration package for eslint built on top of [eslint-standard-config](https://github.com/standard/eslint-config-standard) and modified to meet Juxly's standards.

## Installation

1. Install all peer dependencies

```sh
npx install-peerdeps --dev @juxly/eslint-config
```

2. Install [@juxly/eslint-config](https://github.com/juxly/eslint-config) as a development dependency of your project:

```sh
npm install @juxly/eslint-config --save-dev
```

## Available ESLint Configurations

### @juxly/eslint-config

The default export contains common rules that are not specific to any framework or environment.

```js
// eslintrc.js
module.exports = {
  extends: ["@juxly/eslint-config"]
};
```

### @juxly/eslint-config/node

Extends `@juxly/eslint-config` adding specific rules for Nodejs.

```js
// eslintrc.js
module.exports = {
  extends: ["@juxly/eslint-config/node"]
};
```

## Usage

Add to your project using either method below:

```json
{
  "eslintConfig": {
    "extends": "@juxly/eslint-config"
  }
}
```

Or add a `.eslintrc.js` file to your project root containing:

```js
module.exports = {
  extends: ["@juxly/eslint-config"]
};
```

## VSCode integration

VSCode settings to automatically run `eslint --fix` on save.

```json
"editor.codeActionsOnSave": {
   "source.fixAll.eslint": true,
}
```

This will automagically format your code once you save. You don't need VSCode prettier extension enabled or running on save as eslint will automatically run `prettier` for you.
