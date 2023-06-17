
// 1. webpack插件的作用
// 通过安装和配置第三方的插件，可以扩展webpack的能力，从而让webpack使用起来更方便。
// 最常用的webpack插件有如下两个：
// 1）webpack-dev-server（实时监听项目中文件的变化）
//    类似于node.js 阶段用到的 nodemoon 工具
//    每当修改了源代码，webpack会自动进行项目的打包和构建
// 2）html-webpack-plugin （帮助我们把index首页复制一份放到根目录下）
//   webpack中的html插件（类似于一个模版引擎插件）
//   可以通过此插件自定制index.html页面的内容
//2.
//  2.1）安装webpack-dev-server
//  运行如下的命令，即可在项目中安装此插件
// npm install webpack-dev-server@3.11.2 -D

// 2.2）配置webpack-dev-server
//  (1)修改package.json -> scripts中的dev命令如下：
    //   scripts: {
        // "dev": "webpack serve" //scripts 节点下的脚本，可以通过npm run 执行
    //   }
    // (2)再次运行npm run dev命令，重新进行项目的打包
    // （3）在浏览器中访问http://localhost:8080地址，查看自动打包效果

    // 注意：webpack-dev-server会启动一个实时打包的http服务器

    // 2.3) 安装html-webpack-plugin
    // 运行如下的命令，即可在项目中安装此插件
    // npm install html-webpack-plugin@5.3.2 -D

    // 配置html-webpack-plugin
    // 在webpack.config.js中
    //（1）. 导入html插件，得到一个构造函数
    // const HtmlPlugin = require('html-webpack-plugin')

    // (2)创建html插件的实例对象
    // const htmlplugin = new HtmlPlugin({
        // template: './src/index.html', //指定源文件的存放路径
        // filename: './index.html'    //指定生成文件的存放路径
    // })

    // html-webpack-plugin作用：
    // 1） 通过html插件复制到项目的根目录中的index.html页面，也被放到了内存中
    // 2）HTML插件在生成的index.html页面，自动注入了打包的bundle.js文件


    // 4. devServer节点    
    // 在webpack.config.js配置文件中，可以通过devServer节点对webpack-dev-server
    // 插件进行更多的配置，示例代码如下：
    // devServer: {
    //     open: true, //初次打包完成后，自动打开浏览器
           //指定运行主机的地址
    //     host: '127.0.0.1', //实时打包所用的地址，
           //在http协议中，如果端口号是80，则可以被省略
    //     port: 80 //实时打包所用的端口号
    // }

    // 注意：凡是修改了webpack.config.js配置文件，或修改了package.json配置文件，
    // 必须重启实时打包的服务器，否则最新的配置文件无法生效

