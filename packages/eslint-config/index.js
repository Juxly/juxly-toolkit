module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@babel/eslint-parser',
  globals: {
    _: true,
    moment: true
  },
  plugins: ['lodash'],
  extends: [
    'standard',
    require.resolve('./rules/prettier'),
    require.resolve('./rules/general'),
    'plugin:lodash/canonical',
    'prettier',
    'plugin:prettier/recommended'
  ]
}
