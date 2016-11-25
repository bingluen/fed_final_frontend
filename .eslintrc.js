module.exports = {
  root: true,
  extends: 'semistandard',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: [
    'eslint-plugin-html',
    'eslint-plugin-vue',
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': ['warn', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'semi': ['warn', 'never'],
  },
  'env': {
    'browser': true,
    'es6': true,
  }
}
