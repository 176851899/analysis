/*
 * @Author: Ren Bing
 * @Date: 2022-11-08 09:52:48
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-11-22 18:08:24
 * @Description: 请填写简介
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard',
    // 'prettier'
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
    ' no-tabs':'off',
    'no-new': 'off',
    'no-undef': 'off'
    
  }
}
