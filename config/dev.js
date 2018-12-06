module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240 // 文件大小限制
          }
        }
      }
    }
  },
  h5: {}
}
