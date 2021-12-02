module.exports = {
  rules: {
    'prettier/prettier': [
      2,
      {
        printWidth: 140,
        useTabs: false,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        parenSpacing: false,
        semi: false,
        arrowParens: 'always'
      },
      {
        usePrettierrc: false
      }
    ]
  }
}
