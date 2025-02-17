module.exports = {
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  // "importOrder": [
  //       "^react(.*)$",
  //       "^react-dom(.*)$",
  //       "^react-router-dom(.*)$",
  //       "<THIRD_PARTY_MODULES>",
  //       "^[./].*(?<!\\.(c|sc)ss)$",
  //       "(c|sc)ss$"
  //   ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
