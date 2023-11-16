module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 8']
      },
      'postcss-pxtorem': {
        rootValue: 16,//默认37.5
        propList: ['*']
      }
    }
  }