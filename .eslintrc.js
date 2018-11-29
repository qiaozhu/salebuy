module.exports = {
  root: true,
  extends: ['taro'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    quotes: [0, 'single'], // 引号类型single、double
    semi: [0, 'always'], // js语句结尾分号
    indent: [0, 2], // 缩进
    eqeqeq: [1, 'always'] // 三等号
  },
  parser: 'babel-eslint'
}
