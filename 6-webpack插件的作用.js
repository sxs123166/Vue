
// 1. webpack插件的作用
// 通过安装和配置第三方的插件，可以扩展webpack的能力，从而让webpack使用起来更方便。
// 最常用的webpack插件有如下两个：
// 1）webpack-dev-server
//    类似于node.js 阶段用到的 nodemoon 工具
//    每当修改了源代码，webpack会自动进行项目的打包和构建
// 2）html-webpack-plugin
//   webpack中的html插件（类似于一个模版引擎插件）
//   可以通过此插件自定制index.html页面的内容

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

    
