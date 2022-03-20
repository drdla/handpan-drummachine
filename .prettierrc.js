module.exports = {
  bracketSpacing: false,
  endOfLine: 'lf',
  printWidth: 120,
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: {
        singleQuote: false,
        trailingComma: 'none',
      },
      parser: 'json',
    },
  ],
};
