const path = require('path')


module.exports = {
    //代表webpack 运行的模式，可选值有两个 development 和 production
    //结论： 开发时一定要用development，因为追求的是大宝的速度，而不是体积
    // 反过来：发布上线的时候一定要用production,因为上线追求的是体积小，而不是打包速度快
    mode: "development",
    // entry指定要处理哪个文件
    entry: path.join(__dirname, './src/index1.js'),
    output: {
        // 存放到目录
        path: path.join(__dirname, 'dist'),
        // 生成的文件名
        filename: 'bundle.js'
    },
    // 3. 插件的数组，将来 webpack 在运行时，会加载并调用这些插件
    plugins: [htmlPlugin],
    devServer: {
        // 首次打包成功后， 自动打开浏览器
        open: true,
        // 在 http 协议中，如果端口号是80，则可以被省略
        port: 80,
        // 指定运行的主机地址
        host: '127.0.0.1'
    },
    module: {
        rules: [
            // 定义了不同模块对应的loader
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            // 处理.less文件的loader
            {test:/\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // 处理图片文件的loader
            // 如果需要调用的 loader 只有一个， 则只传递一个字符串也行，如果有多个loader,则必须指定数组
            {test: /\.jpg|png|gif$/,use: 'url-loader'}
        ]
    }
}
