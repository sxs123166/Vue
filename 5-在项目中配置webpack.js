
// 1. 在项目中配置webpack
// 1) 在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置：
//  module.exports = {
//     mode: 'development' //mode用来制定构建模式，可选值有development (生产)和production（上线）
//  }

//  2）在package.json的scripts节点下，新增dev脚本如下：
// "scripts": {
//     "dev": "webpack" //srcipt 节点下的脚本，可以通过npm run 执行，例如：npm run dev
// }
// 3) 在终端中运行npm run dev命令，启动webpack进行项目的打包构建

// 4) webpack中的默认约定
//  在webpack4.x和5.x中，有如下的默认约定
// （1）默认的打包入口文件为src -> index.js
// (2) 默认的文件输出路径为 dist -> main.js

// 注意：可以在webpack.config.js中修改打包的默认约定

// 5） 自定义打包的出口与入口
// 在 webpack.config.js配置文件中，通过entry节点指定打包的入口。通过output节点指定打包的出口
// 示例代码为：
// const path = require('path') //导入node.js中专门操作路径的模块

// module.exports = {
    // entry: path.join(__dirname, './src/index.js') //打包入口文件的路径
    // output: {
    //     path: path.join(__dirname, './dist') //输出文件的存放路径
    //     filename: 'bundle.js' //输出文件的名称
    // }
// }

