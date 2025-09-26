// site_templates/your-template/vue.config.js
const path = require('path');

module.exports = {
  publicPath: './',
  
  configureWebpack: {
    plugins: [
      new (require('copy-webpack-plugin'))({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                '**/index.html'
              ]
            }
          }
        ]
      })
    ]
  }
}