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
    }
}
