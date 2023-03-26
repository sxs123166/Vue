
// 2. 配置webpack打包发布
// 在package.json文件的scripts节点下，新增build命令如下：
// "scripts": {
//     "dev": "webpack serve", //开发环境， 运行dev命令
//     "build": "webpack --mode production" //项目发布时， 运行build命令
// }
// --mode是一个参数项，用来指定webpack的运行模式。produnction代表生产环境
// 会对打包生成的文件进行代码压缩和性能优化

// 注意：通过--model指定的参数项，会覆盖webpack.config.js中的model选项

// 3.把Javascript文件统一生成到js目录中
// 在webpack.config.js配置文件的output节点中，进行如下的配置：
// output: {
//     path: path.join(__dirname, 'dist'),
//     // 明确告诉webpack 把生成的bundle.js文件存放到dist目录下的js子目录中
//     filename: 'js/bundle.js'
// }

// 4. 把图片文件统一生成到image目录中
// 修改webpack.config.js中的url-loader配置项，新增outputPath选项即可指定图片文件的输出路径

// {
//     test: /\.jpg|png|gif$/,
//     use: {
//         loader: 'url-loader',
//         options: {
//             limit: 2228,
//             // 明确指定把打包生成的图片文件，存储到dist目录下的image文件夹中
//             outputPath: 'image'
//         }
//     }
// }

// 5.自动清理dist目录下的旧文件
// 为了在每次打包发布时自动清理掉dist目录中的旧文件，可以配置并安装clean-webpack-plugin插件

// 1） 安装清理dist目录的webpack插件
// npm install clean-webpack-plugin@3.0.0 -D

// 2) 按需导入插件、得到插件的构造函数之后，创建插件的实例对象
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const cleanPlugin = new CleanWebpackPlugin()

// 3. 把创建的cleanPlugin 插件实例对象， 挂载到plugins 节点中
// plugins:[htmlPlugin, cleanPlugin], 挂载插件
