const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
       template:"./template/index.template.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].[chunkhash].css"
    })
  ],
  output: {
    filename: './js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
       },
        {
          test:/\.(jpg|png|gif)$/,
          use:['file-loader?limit=1111&name=images/[name].[ext]'],  //limit：限制多少b一下图片进行base64转码，name：输出目录以及文件名
          exclude: /node_modules/
        }
     ]
   },
   externals: {
    jquery: 'jQuery'
  }
};