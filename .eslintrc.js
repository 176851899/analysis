module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    "prettier"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 允许定义变量不使用
    'no-unused-vars': 'off',
    // 允许new
    'no-new': 'off',
    'no-undef': 'off',
    ' no-tabs':0
  }
}
