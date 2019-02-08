const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        config.entry('second_window').add(path.join(__dirname, '/src/second_window.js'));
        config.plugin('app').use(HtmlWebpackPlugin, [{
          filename: 'main_window.html',
          template: './public/main_window.html',
          templateParameters: {
            'user': { name: 'Manfred'},
            'BASE_URL': process.env.NODE_ENV === 'production' ? './' : '',
            'VUE_APP_NODE_MODULES_PATH': process.env.NODE_ENV === 'production' ? 'false' : '',
            '__static': __dirname
          },
          chunks: ['app', 'chunk-vendors'],
        }]);
        config.plugin('second_window').use(HtmlWebpackPlugin, [{
          filename: 'second.html',
          template: './public/second.html',
          templateParameters: {
            'user': { name: 'Winfried'},
            'BASE_URL': process.env.NODE_ENV === 'production' ? './' : '',
            'VUE_APP_NODE_MODULES_PATH': process.env.NODE_ENV === 'production' ? 'false' : '',
            '__static': __dirname
          },
          chunks: ['second_window', 'chunk-vendors'],
        }]);

      }
    }
  }
}
