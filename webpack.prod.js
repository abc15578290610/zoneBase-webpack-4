const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   mode:"production",
   optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false,//去掉注释
            },
            compress: {//去掉console.log
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }  
          },
        }),
      ],
    }
});