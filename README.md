[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

# zoneBase-webpack-4
zoneBase-webpack-4 is a Webpack 4 simple example to quickly build a web application


## Dependence
Dependence         |Version
-------------------|-------
Webpack            |^4.28.2

## 功能
Some JavaScript Examples, ES6 Modules
> 一些 JavaScript 例子、ES6 模块

Some pictures, fonts, style files
> 一些图片、样式文件

Automatically package and separate js/css/image/font
> 自动打包并分离 js/css/image

运行: npm run build

## 官方文章--------配置篇（webpack.config.js）
>https://www.webpackjs.com/guides/output-management/

## 安装清理插件

`npm install clean-webpack-plugin --save-dev`
``` javascript
new CleanWebpackPlugin(['./dist'],
{
    root:"E:/workspace"//定义删除的根目录作为起点，默认为项目根目录，CleanWebpackPlugin不支持../访问父目录
}),
```

## 安装html模版生成插件

`npm install --save-dev html-webpack-plugin`

``` javascript
    new HtmlWebpackPlugin({
       template:"./src/index.html",
       inject: true//注入代码
    }),
```
## 安装js压缩插件

`npm i -D uglifyjs-webpack-plugin`

``` javascript
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
```
## 配置文件
### webpack.common.js 
webpack通用配置(dev、prod两种模式### 都共用的配置项,由webpack-merge插件合并配置项)
### webpack.dev.js 开发配置项
``` js
devtool: 'inline-source-map' //源代码映射，方便查bug
devServer: { contentBase: './dist'} //开启一个web服务
```

### webpack.prod.js 生产环境配置项
``` js
    plugins: [ new UglifyJSPlugin() ] //引入代码压缩插件，利于最小化代码包

```

## 快捷批处理(build.bat)
``` bash
    @echo off
    for /f %%i in ('dir /b /s /a-d *run.bat') do (
        cd %%~dpi 
        REM start cmd /k "npm run build"
        npm run build
        echo "finish"
    )
    pause
    REM 批量在存在run.bat的目录里执行npm run build命令
```
## enjoy !

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build mini for production
npm run build
```


## 相关参考
输出目录相关，参考地址

>https://segmentfault.com/q/1010000015598957/
>https://segmentfault.com/q/1010000017092986
>https://www.jianshu.com/p/ada20011d7d4
## LICENSE
[MIT](LICENSE)
