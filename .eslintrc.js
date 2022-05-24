module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      "ecmaVersion": 7,
      "sourceType": module,
      legacyDecorators: true
    },
    // parser: '@babel/eslint-parser',
    // parser: "babel-eslint"
    parser: "vue-eslint-parser"
  },
  // parserOptions: {
  //   parser: '@babel/eslint-parser'
  // },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
